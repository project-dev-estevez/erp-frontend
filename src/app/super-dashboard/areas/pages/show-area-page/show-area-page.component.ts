import { Component, OnInit } from '@angular/core';
import { ResponseGetAreaByIdDto } from '../../interfaces/get-area-by-id.dto';
import { AreasService } from '../../services/areas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-area-page',
  templateUrl: './show-area-page.component.html',
  styleUrl: './show-area-page.component.scss'
})
export class ShowAreaPageComponent implements OnInit {

  public area!: ResponseGetAreaByIdDto;

  constructor(
    private areasService: AreasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ){}
  
  ngOnInit(): void {
    this.loadArea();
  }

  private loadArea(){

    const route = this.router.url;
    if( !route.includes( 'show' ) ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.areasService.getAreaById(id);
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');
        console.log(response);
        this.area = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el Área por Id');
        return this.router.navigateByUrl('/');
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ResponseGetManagerByIdDto } from '../../interfaces/get-manager-by-id.dto';
import { ManagersService } from '../../services/managers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-manager-page',
  templateUrl: './show-manager-page.component.html',
  styleUrl: './show-manager-page.component.scss'
})
export class ShowManagerPageComponent implements OnInit{

  public manager!: ResponseGetManagerByIdDto;
  constructor(
    private managersService: ManagersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService

  ){ }

  ngOnInit(): void{
    this.loadManager();
  }

  private loadManager(){

    const route = this.router.url;
    if( !route.includes( 'show' ) ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.managersService.getManagerById(id);
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');
        console.log(response);
        this.manager = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el gerente por Id');
        return this.router.navigateByUrl('/');
      }
    )
  }

}

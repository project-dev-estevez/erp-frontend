//import { ResponseGetCeoByIdDto } from './../../interfaces/get-ceo-by-id.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CeosService } from '../../services/ceos.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { ResponseGetCeoByIdDto } from '../../interfaces/get-ceo-by-id.dto';

@Component({
  selector: 'app-show-ceo-page',
  templateUrl: './show-ceo-page.component.html',
  styleUrl: './show-ceo-page.component.scss'
})
export class ShowCeoPageComponent implements OnInit {

  public ceo!: ResponseGetCeoByIdDto;

  constructor(
    private ceosService: CeosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.loadCeo();
  }

  private loadCeo() {

    const route = this.router.url;
    if( !route.includes('show') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.ceosService.getCeoById( id );
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');        
        console.log(response);
        this.ceo = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el CEO por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DirectionsService } from '../../services/directions.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { ResponseGetDirectionByIdDto } from '../../interfaces/get-direction-by-id.dto';

@Component({
  selector: 'app-show-direction-page',
  templateUrl: './show-direction-page.component.html',
  styleUrl: './show-direction-page.component.scss'
})
export class ShowDirectionPageComponent implements OnInit{

  public direction!: ResponseGetDirectionByIdDto;
  
  constructor(
    private directionsService: DirectionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.loadDirection();
  }

  private loadDirection() {

    const route = this.router.url;
    if( !route.includes('show') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.directionsService.getDirectionById( id );
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');        
        console.log(response);
        this.direction = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el CEO por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

}

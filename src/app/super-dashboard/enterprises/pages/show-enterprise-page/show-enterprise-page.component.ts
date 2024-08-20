import { Component, OnInit } from '@angular/core';
import { Department } from '../../../departments/interfaces/department-entity';
import { ResponseGetEnterpriseByIdDto } from '../../interfaces/get-enterprise-by-id.dto';
import { EnterprisesService } from '../../services/enterprises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-enterprise-page',
  templateUrl: './show-enterprise-page.component.html',
  styleUrl: './show-enterprise-page.component.scss'
})
export class ShowEnterprisePageComponent implements OnInit{

  public enterprise!: ResponseGetEnterpriseByIdDto;
  constructor(
    private enterprisesService: EnterprisesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService

  ){ }

  ngOnInit(): void{
    this.loadEnterprise();
  }

  private loadEnterprise(){

    const route = this.router.url;
    if( !route.includes( 'show' ) ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.enterprisesService.getEnterpriseById(id);
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');
        console.log(response);
        this.enterprise = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo la empresa por Id');
        return this.router.navigateByUrl('/');
      }
    )
  }

}

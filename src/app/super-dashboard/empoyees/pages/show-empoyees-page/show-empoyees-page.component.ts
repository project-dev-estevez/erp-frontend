import { Component, OnInit } from '@angular/core';
import { ResponseGetEmpoyeesByIdDto } from '../../interfaces/get-empoyees-by-id.dto';
import { EmpoyeesService } from '../../services/empoyees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-empoyees-page',
  templateUrl: './show-empoyees-page.component.html',
  styleUrl: './show-empoyees-page.component.scss'
})
export class ShowEmpoyeesPageComponent implements OnInit{

  public empoyees!: ResponseGetEmpoyeesByIdDto;
  constructor(
    private empoyeesService: EmpoyeesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService

  ){ }

  ngOnInit(): void{
    this.loadEmpoyees();
  }

  private loadEmpoyees(){

    const route = this.router.url;
    if( !route.includes( 'show' ) ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.empoyeesService.getEmpoyeesById(id);
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');
        console.log(response);
        this.empoyees = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el puesto por Id');
        return this.router.navigateByUrl('/');
      }
    )
  }

}

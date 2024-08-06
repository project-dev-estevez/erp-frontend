import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Department, ResponseGetDeparmentByIdDto } from '../../interfaces';
import { DepartmentsService } from '../../services/departments.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';

@Component({
  selector: 'app-show-department-page',
  templateUrl: './show-department-page.component.html',
  styleUrl: './show-department-page.component.scss'
})
export class ShowDepartmentPageComponent implements OnInit {

  public department!: ResponseGetDeparmentByIdDto;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ) { }


  ngOnInit(): void {
    this.loadDepartment();
  }


  private loadDepartment() {

    const route = this.router.url;
    if( !route.includes('show') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.departmentsService.getDepartmentById( id );
      })
    ).subscribe(
      response => {
        if( !response ) return this.router.navigateByUrl('/');        
        console.log(response);
        this.department = response;
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el departamento por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

}

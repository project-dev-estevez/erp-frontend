import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Direction } from 'src/app/super-dashboard/directions/interfaces';
import { DirectionsService } from 'src/app/super-dashboard/directions/services/directions.service';
import { DepartmentsService } from '../../services/departments.service';
import { CreateDepartmentDto } from '../../interfaces/create-department.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UpdateDepartmentDto } from '../../interfaces/update-department.dto';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-create-or-edit-department-page',
  templateUrl: './create-or-edit-department-page.component.html',
  styleUrl: './create-or-edit-department-page.component.scss'
})
export class CreateOrEditDepartmentPageComponent implements OnInit {

  private deparmentId: string = '';

  public directions: Direction[] = [];

  public deparmentForm: FormGroup = this.fb.group({
    name:         ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(150) ]],
    directionId:  ['', [ Validators.required ]],
    // managerId:    ['']
  });

  constructor(
    private directionsService: DirectionsService,
    private departmentsService: DepartmentsService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllDirections();
    this.checkIsUpdate();
  }

  private createDepartment() {

    const createDepartmentDto: CreateDepartmentDto = this.deparmentForm.value;

    this.departmentsService.createDeparment( createDepartmentDto ).subscribe(
      response => {
        const name = response.name;
        this.sweetAlert.presentSuccess(`Departamento ${name} Creado con éxito`);
        this.redirectToList(); 
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando el departamento');
      }
    );
  }

  private updateDepartment() {
    const updateDepartmentDto: UpdateDepartmentDto = this.deparmentForm.value;

    this.departmentsService.updateDepartmentById( this.deparmentId, updateDepartmentDto ).subscribe(
      response => {
        this.sweetAlert.presentSuccess(`Departamento ${response.name} Actualizado con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando el departamento');
      }
    );
  }

  private getAllDirections() {
    this.directionsService.getAllDirections().subscribe(
      response => {
        this.directions = response.results;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo las direcciones');
      }
    );
  }

  private checkIsUpdate() {

    const route = this.router.url;
    if( !route.includes('edit') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => { 
        this.deparmentId = id;
        return this.departmentsService.getDepartmentById( id );
      })
    ).subscribe(
      response => {

        if( !response ) return this.router.navigateByUrl('/');
        
        this.deparmentForm.reset({
          name: response.name,
          directionId: response.direction.id
        });

        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el departamento por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

  onSubmit() {

    if( this.deparmentId ) {
      this.updateDepartment();
      return;
    }

    // Crear
    this.createDepartment();       
  }

  redirectToList() {
    this.router.navigateByUrl('/super-dashboard/departments');
  }

}
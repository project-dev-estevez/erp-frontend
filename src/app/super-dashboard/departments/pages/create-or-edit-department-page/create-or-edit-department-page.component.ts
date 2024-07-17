import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { Direction } from 'src/app/super-dashboard/directions/interfaces';
import { DirectionsService } from 'src/app/super-dashboard/directions/services/directions.service';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-create-or-edit-department-page',
  templateUrl: './create-or-edit-department-page.component.html',
  styleUrl: './create-or-edit-department-page.component.scss'
})
export class CreateOrEditDepartmentPageComponent implements OnInit {

  public directions: Direction[] = [];

  public deparmentForm: FormGroup = this.fb.group({
    name:         ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(150) ]],
    directionId:  ['', [ Validators.required ]],
    managerId:    ['']
  });

  constructor(
    private directionsService: DirectionsService,
    private departmentsService: DepartmentsService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllDirections();
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

  onSubmit() {
    // console.log( this.deparmentForm.value );
    this.departmentsService.createDeparment().subscribe(
      response => {
        this.sweetAlert.presentSuccess('Departamento creado');
      },
      errorResponse => {
        console.log(errorResponse);
        this.sweetAlert.presentError('Creando el departamento');
      }
    );
  }

}

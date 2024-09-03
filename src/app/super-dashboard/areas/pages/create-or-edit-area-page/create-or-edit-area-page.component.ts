import { Component, OnInit } from '@angular/core';
import { Area } from '../../interfaces/area-entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreasService } from '../../services/areas.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CreateAreaDto } from '../../interfaces/create-area.dto';
import { UpdateAreaDto } from '../../interfaces/update-area.dto';
import { Department } from 'src/app/super-dashboard/departments/interfaces';
import { DepartmentsService } from 'src/app/super-dashboard/departments/services/departments.service';
import { ManagersService } from 'src/app/super-dashboard/managers/services/managers.service';
import { Manager } from 'src/app/super-dashboard/managers/interfaces/manager-entity';

@Component({
  selector: 'app-create-or-edit-area-page',
  templateUrl: './create-or-edit-area-page.component.html',
  styleUrl: './create-or-edit-area-page.component.scss'
})
export class CreateOrEditAreaPageComponent implements OnInit {

  private areaId: string = '';

  public areas: Area[] = [];
  public managers: Manager[] = [];
  public departments: Department[] = [];

  public areaForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    coordinatorId: ['', [ Validators.required ]],
    leaderId: ['', [ Validators.required ]],
    departmentId: ['', [ Validators.required ]],
  });

  constructor(
    private areasService: AreasService,
    private departmentsService: DepartmentsService,
    private managersService: ManagersService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.getAllManagers();
    this.getAllDepartments();
    this.checkIsUpdate();
  }

  private createArea() {

    const createAreaDto: CreateAreaDto = this.areaForm.value;

    this.areasService.createArea( createAreaDto ).subscribe(
      response => {
        const name = response.name;
        this.sweetAlert.presentSuccess(`El área ${name} se ha creado con éxito`);
        this.redirectToList(); 
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando el Área...');
      }
    );
  }

  private updateArea() {
    
    const updateAreaDto: UpdateAreaDto = this.areaForm.value;

    this.areasService.updateAreaById( this.areaId, updateAreaDto ).subscribe(
      response => {
        this.sweetAlert.presentSuccess(`El área ${response.name} se ha actualizado con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando el Área...');
      }
    );
  }

  private getAllManagers(): void {
    this.managersService.getAllManagers().subscribe(
      response => this.managers = response.results,
      errorResponse => this.sweetAlert.presentError('Obteniendo Listado de Managers...')
    );
  }
  
  private getAllDepartments() {
    this.departmentsService.getAllDepartments().subscribe(
      response => {
        this.departments = response.results;
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
        this.areaId = id;
        return this.areasService.getAreaById( id );
      })
    ).subscribe(
      response => {

        if( !response ) return this.router.navigateByUrl('/');
        
        this.areaForm.reset({
          name: response.name,
          coordinatorId: response.coordinatorId,
          leaderId: response.leaderId,
          departmentId: response.departmentId,
          //areaId: response.id
        });

        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el Área por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

  onSubmit() {

    if( this.areaId ) {
      this.updateArea();
      return;
    }

    // Crear
    this.createArea();       
  }

  redirectToList() {
    this.router.navigateByUrl('/super-dashboard/areas');
  }

}

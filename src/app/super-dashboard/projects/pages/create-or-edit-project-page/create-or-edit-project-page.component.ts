import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project-entity';
import { Customer } from 'src/app/super-dashboard/customers/interfaces/customer-entity';
import { Enterprise } from 'src/app/super-dashboard/enterprises/interfaces/enterprise-entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { CustomersService } from 'src/app/super-dashboard/customers/services/customers.service';
import { EnterprisesService } from 'src/app/super-dashboard/enterprises/services/enterprises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { CreateProjectDto } from '../../interfaces/create-project.dto';
import { UpdateProjectDto } from '../../interfaces/update-project.dto';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-or-edit-project-page',
  templateUrl: './create-or-edit-project-page.component.html',
  styleUrl: './create-or-edit-project-page.component.scss'
})
export class CreateOrEditProjectPageComponent implements OnInit {
  
  private projectId: string = '';

  public projects: Project[] = [];
  public customers: Customer[] = [];
  public enterprises: Enterprise[] = [];

  public projectForm: FormGroup = this.fb. group({
    name: ['', [ Validators.required, Validators.minLength(8) ]],
    customerId: ['', [ Validators.required]],
    enterpriseId: ['', [ Validators.required]]
  });

  constructor(
    private projectsServices: ProjectsService,
    private customersServices: CustomersService,
    private enterprisesServices: EnterprisesService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sweetAlert: SweetAlertService
  ){}
  
  ngOnInit(): void {
    this.getAllCustomers();
    this.getAllEnterprises();
    this.checkIsUpdate();
  }

  private createProject() {

    const createProjectDto: CreateProjectDto = this.projectForm.value;

    this.projectsServices.createProject( createProjectDto ).subscribe(
      response => {
        const name = response.name;
        this.sweetAlert.presentSuccess(`El Proyecto ${name} se ha creado con éxito`);
        this.redirectToList(); 
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando el Proyecto...');
      }
    );
  }

  private updateProject() {
    
    const updateProjectDto: UpdateProjectDto = this.projectForm.value;

    this.projectsServices.updateProjectById( this.projectId, updateProjectDto ).subscribe(
      response => {
        this.sweetAlert.presentSuccess(`El Proyecto ${response.name} se ha actualizado con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando el Proyecto...');
      }
    );
  }

  private getAllCustomers(): void {
    this.customersServices.getAllCustomers({ limit: 8, offset: 0}).subscribe(
      response => this.customers = response.results,
      errorResponse => this.sweetAlert.presentError('Obteniendo Listado de Clientes...')
    );
  }

  private getAllEnterprises(): void {
    this.enterprisesServices.getAllEnterprises().subscribe(
      response => this.enterprises = response.results,
      errorResponse => this.sweetAlert.presentError('Obteniendo Listado de Empresas...')
    );
  }

  private checkIsUpdate() {

    const route = this.router.url;
    if( !route.includes('edit') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => { 
        this.projectId = id;
        return this.projectsServices.getProjectById( id );
      })
    ).subscribe(
      response => {

        if( !response ) return this.router.navigateByUrl('/');
        
        this.projectForm.reset({
          name: response.name,
          customerId: response.customerId,
          enterpriseId: response.enterpriseId,
        });

        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el Proyecto por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

  onSubmit() {

    if( this.projectId ) {
      this.updateProject();
      return;
    }

    // Crear
    this.createProject();       
  }

  redirectToList() {
    this.router.navigateByUrl('/super-dashboard/projects');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { EnterprisesService } from '../../services/enterprises.service';
import { CeosService } from '../../../ceos/services/ceos.service';
import { Ceo } from 'src/app/super-dashboard/ceos/interfaces/ceo-entity';
import { CreateEnterpriseDto } from '../../interfaces/create-enterprise.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateEnterpriseDto } from '../../interfaces/update-enterprise.dto';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-or-edit-enterprise-page',
  templateUrl: './create-or-edit-enterprise-page.component.html',
  styleUrl: './create-or-edit-enterprise-page.component.scss'
})
export class CreateOrEditEnterprisePageComponent implements OnInit {

  private enterpriseId: string = '';

  public ceos: Ceo[] = [];

  public enterpriseForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(150) ]],
    ceoId: ['', [ Validators.required ]],
  });

  constructor(
    private enterpriseService: EnterprisesService,
    private ceosService: CeosService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ){}

  ngOnInit(): void {
    this.getAllCeos();
    this.checkIsUpdate();

  }

  private createEnterprise() {

    const createEnterpriseDto: CreateEnterpriseDto = this.enterpriseForm.value;

    this.enterpriseService.createEnterprise( createEnterpriseDto ).subscribe(
      response => {
        const name = response.name;
        this.sweetAlert.presentSuccess(`Empresa ${name} creada con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando la empresa');
      }
    );
  }

  private updateEnterprise(){
    const UpdateEnterpriseDto: UpdateEnterpriseDto = this.enterpriseForm.value;

    this.enterpriseService.updateEnterpriseById( this.enterpriseId, UpdateEnterpriseDto ).subscribe(
      response => {
        this.sweetAlert.presentSuccess(`Empresa ${response.name} actualizada con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando la empresa');
      }
    );
  }

  private getAllCeos() {
    this.ceosService.getAllCeos().subscribe(
      response => {
        this.ceos = response.results;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo los Ceos');
      }
    );
  }

  private checkIsUpdate(){

    const route = this.router.url;
    if( !route.includes('edit') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({id}) => {
        this.enterpriseId = id;
        return this.enterpriseService.getEnterpriseById( id );
      } )
    ).subscribe(
      response => {
        if(!response)return this.router.navigateByUrl('/');

        this.enterpriseForm.reset({
          name: response.name,
          ceoId: response.ceo.id
        });
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo la empresa por Id');
        return this.router.navigateByUrl('/');
      }
    )
  }

  onSubmit() {

    if( this.enterpriseId ) {
      this.updateEnterprise();
      return;
    }

    // Crear
    this.createEnterprise();
  }

  redirectToList() {
    this.router.navigateByUrl('/super-dashboard/enterprises');
  }

}

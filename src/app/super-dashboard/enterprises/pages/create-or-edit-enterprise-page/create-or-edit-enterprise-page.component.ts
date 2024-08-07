import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { EnterprisesService } from '../../services/enterprises.service';
import { CeosService } from '../../../ceos/services/ceos.service';
import { Ceo } from 'src/app/super-dashboard/ceos/interfaces/ceo-entity';
import { CreateEnterpriseDto } from '../../interfaces/create-enterprise.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-or-edit-enterprise-page',
  templateUrl: './create-or-edit-enterprise-page.component.html',
  styleUrl: './create-or-edit-enterprise-page.component.scss'
})
export class CreateOrEditEnterprisePageComponent implements OnInit {

  public ceos: Ceo[] = [];

  public enterpriseForm: FormGroup = this.fb.group({
    name:         ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(150) ]],
    ceoId:  ['', [ Validators.required ]],
    // managerId:    ['']
  });

  constructor(
    private enterpriseService: EnterprisesService,
    private CeosService: CeosService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder,
    private router: Router,

  ){}

  private getAllCeos() {
    this.CeosService.getAllCeos().subscribe(
      response => {
        this.ceos = response.results;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo los Ceos');
      }
    );
  }

  ngOnInit(): void {
    this.getAllCeos();

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

  onSubmit() {

    //if( this.enterpriseId ) {
      //this.updateEnterprise();
      //return;
    //}

    // Crear
    this.createEnterprise();
  }

  redirectToList() {
    this.router.navigateByUrl('/super-dashboard/enterprises');
  }

}

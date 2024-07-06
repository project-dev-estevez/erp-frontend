import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DirectionsService } from '../../services/directions.service';
import { switchMap } from 'rxjs';
import { Enterprise } from 'src/app/super-dashboard/enterprises/interfaces';
import { EnterprisesService } from 'src/app/super-dashboard/enterprises/services/enterprises.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { DirectorsService } from 'src/app/super-dashboard/directors/services/directors.service';
import { Director } from 'src/app/super-dashboard/directors/interfaces';
import { CreateDirectionDto, UpdateDirectionDto } from '../../interfaces';

@Component({
  selector: 'app-create-or-edit-direction-page',
  templateUrl: './create-or-edit-direction-page.component.html',
  styleUrl: './create-or-edit-direction-page.component.scss'
})
export class CreateOrEditDirectionPageComponent implements OnInit {

  public directionForm: FormGroup = this.fb.group({
    id:                 [''],
    name:               [ '',     [ Validators.required ] ],
    isGeneralDirection: [ false,  [ Validators.required ] ],
    enterpriseId:       [ '',     [ Validators.required ] ],
    directorId:         [ '',     [ Validators.required ] ]
  });

  public enterprises: Enterprise[] = [];
  public directors: Director[] = [];

  constructor(
    private directionsService: DirectionsService,
    private enterprisesService: EnterprisesService,
    private directorsService: DirectorsService,
    private fb: FormBuilder,
    private sweetAlert: SweetAlertService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkIsUpdate();
    this.getAllEnterprises();
    this.getAllDirectors();
  }

  get currentDataWithoutId () {
    const currentData = this.directionForm.value;
    delete currentData.id;
    return currentData;
  }

  private getAllEnterprises(): void {
    this.enterprisesService.getAllEnterprises().subscribe(
      response => this.enterprises = response.results,
      errorResponse => this.sweetAlert.presentError('Obteniendo Listado de Empresas!')
    );
  }

  private getAllDirectors(): void {
    this.directorsService.getAllDirectors().subscribe(
      response => this.directors = response.results,
      errorResponse => this.sweetAlert.presentError('Obteniendo Listado de Directores!')
    );
  }

  private checkIsUpdate() {
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.directionsService.getDirectionById( id ) )
    ).subscribe(
      response => {

        if( !response ) return this.router.navigateByUrl('/');

        const directorId = response.director.id;
        const enterpriseId = response.enterprise.id;
        this.directionForm.reset({ ...response, directorId, enterpriseId });
        return;
      },
      errorResponse => this.sweetAlert.presentError('Obteniendo Dirección!')
    );
  }

  private createDirection(): void {

    const createDirectionDto: CreateDirectionDto = this.currentDataWithoutId;
    this.directionsService.createDirection( createDirectionDto ).subscribe(
      response => {
        this.router.navigate(['super-dashboard/directions']);
        this.sweetAlert.presentSuccess(`Dirección ${response.name} Creada!`);
      },
      errorResponse => this.sweetAlert.presentError('Creando Dirección!')
    );
  }

  private updateDirection( id: string ): void {

    const updateDirectionDto: UpdateDirectionDto = this.currentDataWithoutId;
    this.directionsService.updateDirectionById( id, updateDirectionDto ).subscribe(
      response => {
        this.router.navigate(['super-dashboard/directions']);
        this.sweetAlert.presentSuccess(`Dirección ${response.name} Actualizada!`);
      },
      errorResponse => this.sweetAlert.presentError('Actualizando Dirección!')
    );
  }

  public onSubmit(): void {

    const formData = this.directionForm.value;
    const { id } = formData;

    if( id ) {
      // Update direction
      this.updateDirection( id );      
      return;
    }

    // Create direction    
    this.createDirection();
  }

}

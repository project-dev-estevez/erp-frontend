import { Component, OnInit } from '@angular/core';
import { Ceo } from '../../interfaces/ceo-entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CeosService } from '../../services/ceos.service';
import { SweetAlertService } from '@shared/services/sweet-alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CreateCeoDto } from '../../interfaces/create-ceo.dto';
import { UpdateCeoDto } from '../../interfaces/update-ceo.dto';

@Component({
  selector: 'app-create-or-edit-ceo-page',
  templateUrl: './create-or-edit-ceo-page.component.html',
  styleUrl: './create-or-edit-ceo-page.component.scss'
})
export class CreateOrEditCeoPageComponent implements OnInit {

  private ceoId: string = '';

  public ceos: Ceo[] = [];

  public ceoForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required ]],
    fullName: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(150) ]],
  });

  constructor(
    private ceosService: CeosService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkIsUpdate();
  }

  private createCeo() {

    const createCeoDto: CreateCeoDto = this.ceoForm.value;

    this.ceosService.createCeo( createCeoDto ).subscribe(
      response => {
        const fullName = response.fullName;
        this.sweetAlert.presentSuccess(`CEO ${fullName} creado con éxito`);
        this.redirectToList(); 
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando el CEO...');
      }
    );
  }

  private updateCeo() {
    
    const updateCeoDto: UpdateCeoDto = this.ceoForm.value;

    this.ceosService.updateCeoById( this.ceoId, updateCeoDto ).subscribe(
      response => {
        this.sweetAlert.presentSuccess(`CEO ${response.fullName} actualizado con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando el CEO...');
      }
    );
  }

  private checkIsUpdate() {

    const route = this.router.url;
    if( !route.includes('edit') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => { 
        this.ceoId = id;
        return this.ceosService.getCeoById( id );
      })
    ).subscribe(
      response => {

        if( !response ) return this.router.navigateByUrl('/');
        
        this.ceoForm.reset({
          email: response.email,
          password: response.password,
          fullName: response.fullName,
          ceoId: response.id
        });

        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo el CEO por ID');
        return this.router.navigateByUrl('/');
      }
    )
  }

  onSubmit() {

    if( this.ceoId ) {
      this.updateCeo();
      return;
    }

    // Crear
    this.createCeo();       
  }

  redirectToList() {
    this.router.navigateByUrl('/super-dashboard/ceos');
  }

}

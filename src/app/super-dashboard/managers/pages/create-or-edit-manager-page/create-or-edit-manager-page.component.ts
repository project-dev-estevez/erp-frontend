import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagersService } from '../../services/managers.service';
import { SweetAlertService } from "@shared/services/sweet-alert.service";
import { Router, ActivatedRoute } from '@angular/router';
import { CreateManagerDto } from '../../interfaces/create-manager.dto';
import { UpdateManagerDto } from '../../interfaces/update-manager.dto';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-or-edit-manager-page',
  templateUrl: './create-or-edit-manager-page.component.html',
  styleUrl: './create-or-edit-manager-page.component.scss'
})

export class CreateOrEditManagerPageComponent implements OnInit{

  private managerId: string = '';

  public managerForm: FormGroup = this.fb.group({
    fullName: ['', [ Validators.required ]],
    email: ['', [ Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(7) ]]
  });

  constructor(
    private managersService: ManagersService,
    private sweetAlert: SweetAlertService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.checkIsUpdate();
  }

  private createManager(){

    const CreateManagerDto: CreateManagerDto = this.managerForm.value;

    this.managersService.createManager( CreateManagerDto ).subscribe(
      response => {
        const name = response.name;
        this.sweetAlert.presentSuccess( `Gerente ${name} creado con éxito` );
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando el gerente');
      }
    );
  }

  private updateManager(){
    const UpdateManagerDto: UpdateManagerDto = this.managerForm.value;

    this.managersService.updateManagerById(this.managerId, UpdateManagerDto).subscribe(
      response =>{
        this.sweetAlert.presentSuccess(`Manager ${response.fullName} actualizado con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando gerente');
      }
    );
  }

  private checkIsUpdate(){
    const route = this.router.url;
    if( !route.includes('edit'))return;

    this.activatedRoute.params.pipe(
      switchMap( ({id})=>{
        this.managerId = id;
        return this.managersService.getManagerById( id );
      } )
    ).subscribe(
      response => {
        if(!response)return this.router.navigateByUrl('/');

        this.managerForm.reset({
          fullName: response.fullName,
          email: response.email,
          password: response.password
        });
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo gerente por Id');
        return this.router.navigateByUrl('/');
      }
    )

  }

  onSubmit(){
    if( this.managerId ){
      this.updateManager();
      return;
    }

    this.createManager();
  }

  redirectToList(){
    this.router.navigateByUrl('/super-dashboard/managers');
  }

}

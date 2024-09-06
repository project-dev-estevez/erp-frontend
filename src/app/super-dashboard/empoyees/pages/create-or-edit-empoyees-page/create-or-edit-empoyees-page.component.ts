import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpoyeesService } from '../../services/empoyees.service';
import { SweetAlertService } from "@shared/services/sweet-alert.service";
import { Router, ActivatedRoute } from '@angular/router';
import { CreateEmpoyeesDto } from '../../interfaces/create-empoyees.dto';
import { UpdateEmpoyeesDto } from '../../interfaces/update-empoyees.dto';
import { switchMap } from 'rxjs';
import { AreasService } from '../../../areas/services/areas.service'
import { Area } from "src/app/super-dashboard/areas/interfaces/area-entity";

@Component({
  selector: 'app-create-or-edit-empoyees-page',
  templateUrl: './create-or-edit-empoyees-page.component.html',
  styleUrl: './create-or-edit-empoyees-page.component.scss'
})

export class CreateOrEditEmpoyeesPageComponent implements OnInit{

  private empoyeesId: string = '';

  public areas: Area[] = [];

  public empoyeesForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    position: ['', [Validators.required]],
    areaId: ['', [Validators.required]]
  });

  constructor(
    private empoyeesService: EmpoyeesService,
    private sweetAlert: SweetAlertService,
    private areasService: AreasService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getAllAreas();
    this.checkIsUpdate();
  }

  private createEmpoyees(){

    const CreateEmpoyeesDto: CreateEmpoyeesDto = this.empoyeesForm.value;

    this.empoyeesService.createEmpoyees( CreateEmpoyeesDto ).subscribe(
      response => {
        const name = response.name;
        this.sweetAlert.presentSuccess( `Puesto ${name} creado con éxito` );
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Creando puesto');
      }
    );
  }

  private getAllAreas() {
    this.areasService.getAllAreas().subscribe(
      response => {
        this.areas = response.results;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo las áreas');
      }
    );
  }

  private updateEmpoyees(){
    const UpdateEmpoyeesDto: UpdateEmpoyeesDto = this.empoyeesForm.value;

    this.empoyeesService.updateEmpoyeesById(this.empoyeesId, UpdateEmpoyeesDto).subscribe(
      response =>{
        this.sweetAlert.presentSuccess(`Puesto ${response.name} actualizado con éxito`);
        this.redirectToList();
      },
      errorResponse => {
        this.sweetAlert.presentError('Actualizando puesto');
      }
    );
  }

  private checkIsUpdate(){
    const route = this.router.url;
    if( !route.includes('edit'))return;

    this.activatedRoute.params.pipe(
      switchMap( ({id})=>{
        this.empoyeesId = id;
        return this.empoyeesService.getEmpoyeesById( id );
      } )
    ).subscribe(
      response => {
        if(!response)return this.router.navigateByUrl('/');

        this.empoyeesForm.reset({
          name: response.name,
          areaId: response.area.id,
          position: response.position
        });
        return;
      },
      errorResponse => {
        this.sweetAlert.presentError('Obteniendo puesto por Id');
        return this.router.navigateByUrl('/');
      }
    )

  }

  onSubmit(){
    if( this.empoyeesId ){
      this.updateEmpoyees();
      return;
    }

    this.createEmpoyees();
  }

  redirectToList(){
    this.router.navigateByUrl('/super-dashboard/empoyees');
  }

}

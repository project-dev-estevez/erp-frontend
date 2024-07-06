import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Direction } from '../../interfaces/direction.interface';
import { DirectionsService } from '../../services/directions.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-or-edit-direction-page',
  templateUrl: './create-or-edit-direction-page.component.html',
  styleUrl: './create-or-edit-direction-page.component.scss'
})
export class CreateOrEditDirectionPageComponent implements OnInit {

  public directionForm: FormGroup = this.fb.group({
    name:               [ '',     [ Validators.required ] ],
    isGeneralDirection: [ false,  [ Validators.required ] ],
    enterpriseId:       [ '',     [ Validators.required ] ],
    directorId:         [ '',     [ Validators.required ] ]
  });

  enterprises = [
    { value: 'ent-1', viewValue: 'Empresa 1' },
    { value: 'ent-2', viewValue: 'Empresa 2' },
    { value: 'ent-3', viewValue: 'Empresa 3' }
  ];

  directors = [
    { value: 'dir-1', viewValue: 'Director 1' },
    { value: 'dir-2', viewValue: 'Director 2' },
    { value: 'dir-3', viewValue: 'Director 3' }
  ];

  constructor(
    private directionsService: DirectionsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkIsUpdate();
  }

  get currentDirection(): Direction {
    return this.directionForm.value;
  }

  checkIsUpdate() {
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.directionsService.getDirectionById( id ) )
    ).subscribe(
      direction => {

        if( !direction ) return this.router.navigateByUrl('/');

        this.directionForm.reset( direction );
        return;
      },
      errorResponse => {
        console.error('Error getting direction:', errorResponse);
      }
    );
  }

  onSubmit(): void {

    if( this.currentDirection.id ) {
      // Update direction

      return;
    }

    this.directionsService.createDirection( this.currentDirection ).subscribe(
      response => {
        console.log('Direction created:', response);
      },
      errorResponse => {
        console.error('Error creating direction:', errorResponse);
      }
    );

  }

}

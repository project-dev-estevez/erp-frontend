import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/super-dashboard/directions/interfaces';
import { DirectionsService } from 'src/app/super-dashboard/directions/services/directions.service';

@Component({
  selector: 'app-create-or-edit-department-page',
  templateUrl: './create-or-edit-department-page.component.html',
  styleUrl: './create-or-edit-department-page.component.scss'
})
export class CreateOrEditDepartmentPageComponent implements OnInit {

  public directions: Direction[] = [];

  constructor(
    private directionsService: DirectionsService
  ) { }

  ngOnInit(): void {

    this.directionsService.getAllDirections().subscribe(
      response => {
        this.directions = response.results;
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );

  }

}

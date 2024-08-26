import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/super-dashboard/departments/interfaces';
import { DepartmentsService } from 'src/app/super-dashboard/departments/services/departments.service';

@Component({
  selector: 'app-create-or-edit-manager-page',
  templateUrl: './create-or-edit-manager-page.component.html',
  styleUrl: './create-or-edit-manager-page.component.scss'
})
export class CreateOrEditManagerPageComponent implements OnInit {

  public departments: Department[] = [];

  constructor(
    private departmenstsService: DepartmentsService
  ) {}



  ngOnInit(): void {

    this.departmenstsService.getAllDepartments().subscribe(
      response => {
        this.departments = response.results;
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );


  }

}

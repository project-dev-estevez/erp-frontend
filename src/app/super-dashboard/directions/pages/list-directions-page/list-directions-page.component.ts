import { Component, OnInit } from '@angular/core';
import { Direction } from '../../interfaces';
import { TableColumn } from '@shared/interfaces/table-column';
import { TableConfig } from '@shared/interfaces/table-config';
import { DirectionsService } from '../../services/directions.service';

@Component({
  selector: 'app-list-directions-page',
  templateUrl: './list-directions-page.component.html',
  styleUrl: './list-directions-page.component.scss'
})
export class ListDirectionsPageComponent implements OnInit {

  public dataList: Direction[] = [];

  public tableColumns: TableColumn[] = [
    { label: 'Nombre', def: 'name', dataKey: 'name' },
  ];

  public tableConfig: TableConfig = {
    showActions: true,
    totalItemsPagination: 0
  };

  constructor(
    private directionsService: DirectionsService
  ) { }

  ngOnInit(): void {
    this.looadDataList();
  }

  looadDataList() {
    this.directionsService.getAllDirections().subscribe(
      response => {        
        this.dataList = response.results;
        this.tableConfig = { ...this.tableConfig, totalItemsPagination: response.total };
        console.log(this.dataList);
      },
      errorResponse => {
        console.error(errorResponse);
      }
    );
  }

}

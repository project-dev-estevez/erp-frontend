import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-warehouse-general-products',
  templateUrl: './warehouse-general-products.component.html',
  styleUrl: './warehouse-general-products.component.scss'
})
export class WarehouseGeneralProductsComponent {
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;

}

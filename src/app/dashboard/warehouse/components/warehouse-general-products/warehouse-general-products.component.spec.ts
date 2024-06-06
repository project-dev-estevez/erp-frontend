import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGeneralProductsComponent } from './warehouse-general-products.component';

describe('WarehouseGeneralProductsComponent', () => {
  let component: WarehouseGeneralProductsComponent;
  let fixture: ComponentFixture<WarehouseGeneralProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseGeneralProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehouseGeneralProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

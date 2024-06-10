import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelProductsComponent } from './fuel-products.component';

describe('FuelProductsComponent', () => {
  let component: FuelProductsComponent;
  let fixture: ComponentFixture<FuelProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuelProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

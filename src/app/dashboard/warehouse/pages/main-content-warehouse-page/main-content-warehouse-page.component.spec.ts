import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentWarehousePageComponent } from './main-content-warehouse-page.component';

describe('MainContentWarehousePageComponent', () => {
  let component: MainContentWarehousePageComponent;
  let fixture: ComponentFixture<MainContentWarehousePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContentWarehousePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContentWarehousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

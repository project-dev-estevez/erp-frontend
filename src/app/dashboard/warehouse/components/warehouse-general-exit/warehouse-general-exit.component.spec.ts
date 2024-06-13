import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGeneralExitComponent } from './warehouse-general-exit.component';

describe('WarehouseGeneralExitComponent', () => {
  let component: WarehouseGeneralExitComponent;
  let fixture: ComponentFixture<WarehouseGeneralExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseGeneralExitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehouseGeneralExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

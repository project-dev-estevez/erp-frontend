import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGeneralEntryComponent } from './warehouse-general-entry.component';

describe('WarehouseGeneralEntryComponent', () => {
  let component: WarehouseGeneralEntryComponent;
  let fixture: ComponentFixture<WarehouseGeneralEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseGeneralEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehouseGeneralEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

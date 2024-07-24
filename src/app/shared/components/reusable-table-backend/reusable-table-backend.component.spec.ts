import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableBackendComponent } from './reusable-table-backend.component';

describe('ReusableTableBackendComponent', () => {
  let component: ReusableTableBackendComponent;
  let fixture: ComponentFixture<ReusableTableBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableTableBackendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReusableTableBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

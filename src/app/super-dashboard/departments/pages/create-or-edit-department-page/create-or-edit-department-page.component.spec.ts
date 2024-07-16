import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditDepartmentPageComponent } from './create-or-edit-department-page.component';

describe('CreateOrEditDepartmentPageComponent', () => {
  let component: CreateOrEditDepartmentPageComponent;
  let fixture: ComponentFixture<CreateOrEditDepartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditDepartmentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

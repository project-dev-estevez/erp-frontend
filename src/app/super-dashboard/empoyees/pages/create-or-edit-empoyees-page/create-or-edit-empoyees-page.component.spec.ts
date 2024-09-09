import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditEmpoyeesPageComponent } from './create-or-edit-empoyees-page.component';

describe('CreateOrEditEmpoyeesPageComponent', () => {
  let component: CreateOrEditEmpoyeesPageComponent;
  let fixture: ComponentFixture<CreateOrEditEmpoyeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditEmpoyeesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrEditEmpoyeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpoyeesPageComponent } from './show-empoyees-page.component';

describe('ShowEnterprisePageComponent', () => {
  let component: ShowEmpoyeesPageComponent;
  let fixture: ComponentFixture<ShowEmpoyeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowEmpoyeesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEmpoyeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

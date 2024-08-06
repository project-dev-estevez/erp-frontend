import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartmentPageComponent } from './show-department-page.component';

describe('ShowDepartmentPageComponent', () => {
  let component: ShowDepartmentPageComponent;
  let fixture: ComponentFixture<ShowDepartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDepartmentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

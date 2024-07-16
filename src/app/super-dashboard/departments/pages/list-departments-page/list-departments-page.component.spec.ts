import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepartmentsPageComponent } from './list-departments-page.component';

describe('ListDepartmentsPageComponent', () => {
  let component: ListDepartmentsPageComponent;
  let fixture: ComponentFixture<ListDepartmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDepartmentsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDepartmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

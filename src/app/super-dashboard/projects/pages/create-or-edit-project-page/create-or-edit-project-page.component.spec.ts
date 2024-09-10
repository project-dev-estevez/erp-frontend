import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditProjectPageComponent } from './create-or-edit-project-page.component';

describe('CreateOrEditProjectPageComponent', () => {
  let component: CreateOrEditProjectPageComponent;
  let fixture: ComponentFixture<CreateOrEditProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditProjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

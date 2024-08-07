import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditEnterprisePageComponent } from './create-or-edit-enterprise-page.component';

describe('CreateOrEditEnterprisePageComponent', () => {
  let component: CreateOrEditEnterprisePageComponent;
  let fixture: ComponentFixture<CreateOrEditEnterprisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditEnterprisePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditEnterprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditCustomerPageComponent } from './create-or-edit-customer-page.component';

describe('CreateOrEditCustomerPageComponent', () => {
  let component: CreateOrEditCustomerPageComponent;
  let fixture: ComponentFixture<CreateOrEditCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditCustomerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerPageComponent } from './show-customer-page.component';

describe('ShowCustomerPageComponent', () => {
  let component: ShowCustomerPageComponent;
  let fixture: ComponentFixture<ShowCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCustomerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

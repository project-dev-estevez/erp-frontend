import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyHygieneProductsComponent } from './safety-hygiene-products.component';

describe('SafetyHygieneProductsComponent', () => {
  let component: SafetyHygieneProductsComponent;
  let fixture: ComponentFixture<SafetyHygieneProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyHygieneProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyHygieneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

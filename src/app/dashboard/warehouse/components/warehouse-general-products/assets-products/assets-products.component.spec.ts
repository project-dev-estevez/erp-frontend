import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsProductsComponent } from './assets-products.component';

describe('AssetsProductsComponent', () => {
  let component: AssetsProductsComponent;
  let fixture: ComponentFixture<AssetsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetsProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

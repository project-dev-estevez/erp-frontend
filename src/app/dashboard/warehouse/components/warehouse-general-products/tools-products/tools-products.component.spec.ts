import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsProductsComponent } from './tools-products.component';

describe('ToolsProductsComponent', () => {
  let component: ToolsProductsComponent;
  let fixture: ComponentFixture<ToolsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

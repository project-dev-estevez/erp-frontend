import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomersPageComponent } from './list-customers-page.component';

describe('ListCustomersPageComponent', () => {
  let component: ListCustomersPageComponent;
  let fixture: ComponentFixture<ListCustomersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCustomersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCustomersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

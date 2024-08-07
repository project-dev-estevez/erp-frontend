import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnterprisesPageComponent } from './list-enterprises-page.component';

describe('ListEnterprisesPageComponent', () => {
  let component: ListEnterprisesPageComponent;
  let fixture: ComponentFixture<ListEnterprisesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEnterprisesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEnterprisesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

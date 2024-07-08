import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirectionsPageComponent } from './list-directions-page.component';

describe('ListDirectionsPageComponent', () => {
  let component: ListDirectionsPageComponent;
  let fixture: ComponentFixture<ListDirectionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDirectionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDirectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

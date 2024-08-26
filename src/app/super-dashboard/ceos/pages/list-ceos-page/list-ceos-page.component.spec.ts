import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCeosPageComponent } from './list-ceos-page.component';

describe('ListCeosPageComponent', () => {
  let component: ListCeosPageComponent;
  let fixture: ComponentFixture<ListCeosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCeosPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCeosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjectPageComponent } from './show-project-page.component';

describe('ShowProjectPageComponent', () => {
  let component: ShowProjectPageComponent;
  let fixture: ComponentFixture<ShowProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowProjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

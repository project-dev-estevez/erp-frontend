import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMainContentPageComponent } from './super-main-content-page.component';

describe('SuperMainContentPageComponent', () => {
  let component: SuperMainContentPageComponent;
  let fixture: ComponentFixture<SuperMainContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperMainContentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperMainContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

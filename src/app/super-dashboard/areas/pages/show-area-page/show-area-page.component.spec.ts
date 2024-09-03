import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAreaPageComponent } from './show-area-page.component';

describe('ShowAreaPageComponent', () => {
  let component: ShowAreaPageComponent;
  let fixture: ComponentFixture<ShowAreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAreaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCeoPageComponent } from './show-ceo-page.component';

describe('ShowCeoPageComponent', () => {
  let component: ShowCeoPageComponent;
  let fixture: ComponentFixture<ShowCeoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCeoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

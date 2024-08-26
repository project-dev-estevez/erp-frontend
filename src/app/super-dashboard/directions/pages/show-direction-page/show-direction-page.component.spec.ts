import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDirectionPageComponent } from './show-direction-page.component';

describe('ShowDirectionPageComponent', () => {
  let component: ShowDirectionPageComponent;
  let fixture: ComponentFixture<ShowDirectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDirectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDirectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

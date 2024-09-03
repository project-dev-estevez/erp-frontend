import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditAreaPageComponent } from './create-or-edit-area-page.component';

describe('CreateOrEditAreaPageComponent', () => {
  let component: CreateOrEditAreaPageComponent;
  let fixture: ComponentFixture<CreateOrEditAreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditAreaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

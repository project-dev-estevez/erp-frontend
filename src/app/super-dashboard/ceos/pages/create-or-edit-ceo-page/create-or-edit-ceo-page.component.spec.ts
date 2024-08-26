import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditCeoPageComponent } from './create-or-edit-ceo-page.component';

describe('CreateOrEditCeoPageComponent', () => {
  let component: CreateOrEditCeoPageComponent;
  let fixture: ComponentFixture<CreateOrEditCeoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditCeoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditCeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

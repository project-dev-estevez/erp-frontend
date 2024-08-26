import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditManagerPageComponent } from './create-or-edit-manager-page.component';

describe('CreateOrEditManagerPageComponent', () => {
  let component: CreateOrEditManagerPageComponent;
  let fixture: ComponentFixture<CreateOrEditManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditManagerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

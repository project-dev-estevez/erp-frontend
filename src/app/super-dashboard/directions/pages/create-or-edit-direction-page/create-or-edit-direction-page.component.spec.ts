import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditDirectionPageComponent } from './create-or-edit-direction-page.component';

describe('CreateOrEditDirectionPageComponent', () => {
  let component: CreateOrEditDirectionPageComponent;
  let fixture: ComponentFixture<CreateOrEditDirectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditDirectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditDirectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

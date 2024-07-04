import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditDirectionComponent } from './create-or-edit-direction.component';

describe('CreateOrEditDirectionComponent', () => {
  let component: CreateOrEditDirectionComponent;
  let fixture: ComponentFixture<CreateOrEditDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditDirectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

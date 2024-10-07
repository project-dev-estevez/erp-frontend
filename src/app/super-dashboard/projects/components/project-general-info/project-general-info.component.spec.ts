import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGeneralInfoComponent } from './project-general-info.component';

describe('ProjectGeneralInfoComponent', () => {
  let component: ProjectGeneralInfoComponent;
  let fixture: ComponentFixture<ProjectGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectGeneralInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorkScheduleComponent } from './project-work-schedule.component';

describe('ProjectWorkScheduleComponent', () => {
  let component: ProjectWorkScheduleComponent;
  let fixture: ComponentFixture<ProjectWorkScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectWorkScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectWorkScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMachineryAndToolsComponent } from './project-machinery-and-tools.component';

describe('ProjectMachineryAndToolsComponent', () => {
  let component: ProjectMachineryAndToolsComponent;
  let fixture: ComponentFixture<ProjectMachineryAndToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectMachineryAndToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectMachineryAndToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

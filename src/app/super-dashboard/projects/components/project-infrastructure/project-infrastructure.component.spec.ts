import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfrastructureComponent } from './project-infrastructure.component';

describe('ProjectInfrastructureComponent', () => {
  let component: ProjectInfrastructureComponent;
  let fixture: ComponentFixture<ProjectInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInfrastructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

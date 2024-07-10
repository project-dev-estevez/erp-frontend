import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelSidenavComponent } from './multilevel-sidenav.component';

describe('MultilevelSidenavComponent', () => {
  let component: MultilevelSidenavComponent;
  let fixture: ComponentFixture<MultilevelSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultilevelSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultilevelSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

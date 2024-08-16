import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagersPageComponent } from './list-managers-page.component';

describe('ListManagersPageComponent', () => {
  let component: ListManagersPageComponent;
  let fixture: ComponentFixture<ListManagersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListManagersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListManagersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

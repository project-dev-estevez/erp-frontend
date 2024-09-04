import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAreasPageComponent } from './list-areas-page.component';

describe('ListAreasPageComponent', () => {
  let component: ListAreasPageComponent;
  let fixture: ComponentFixture<ListAreasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAreasPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAreasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

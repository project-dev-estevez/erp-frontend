import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEmpoyeesPageComponent } from './list-empoyees-page.component';

describe('ListEmpoyeesPageComponent', () => {
  let component: ListEmpoyeesPageComponent;
  let fixture: ComponentFixture<ListEmpoyeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEmpoyeesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmpoyeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithCreateComponent } from './search-with-create.component';

describe('SearchWithCreateComponent', () => {
  let component: SearchWithCreateComponent;
  let fixture: ComponentFixture<SearchWithCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchWithCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchWithCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEnterprisePageComponent } from './show-enterprise-page.component';

describe('ShowEnterprisePageComponent', () => {
  let component: ShowEnterprisePageComponent;
  let fixture: ComponentFixture<ShowEnterprisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowEnterprisePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowEnterprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

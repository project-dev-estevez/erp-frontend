import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManagerPageComponent } from './show-manager-page.component';

describe('ShowEnterprisePageComponent', () => {
  let component: ShowManagerPageComponent;
  let fixture: ComponentFixture<ShowManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowManagerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

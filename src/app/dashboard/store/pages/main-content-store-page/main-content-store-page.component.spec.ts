import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentStorePageComponent } from './main-content-store-page.component';

describe('MainContentStorePageComponent', () => {
  let component: MainContentStorePageComponent;
  let fixture: ComponentFixture<MainContentStorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContentStorePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainContentStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

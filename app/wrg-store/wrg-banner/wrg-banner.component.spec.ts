import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgBannerComponent } from './wrg-banner.component';

describe('WrgBannerComponent', () => {
  let component: WrgBannerComponent;
  let fixture: ComponentFixture<WrgBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

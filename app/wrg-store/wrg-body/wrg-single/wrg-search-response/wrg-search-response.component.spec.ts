import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgSearchResponseComponent } from './wrg-search-response.component';

describe('WrgSearchResponseComponent', () => {
  let component: WrgSearchResponseComponent;
  let fixture: ComponentFixture<WrgSearchResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgSearchResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgSearchResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

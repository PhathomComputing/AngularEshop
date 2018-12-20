import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgSearchComponent } from './wrg-search.component';

describe('WrgSearchComponent', () => {
  let component: WrgSearchComponent;
  let fixture: ComponentFixture<WrgSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

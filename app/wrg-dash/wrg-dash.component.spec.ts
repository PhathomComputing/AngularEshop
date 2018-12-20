import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgDashComponent } from './wrg-dash.component';

describe('WrgDashComponent', () => {
  let component: WrgDashComponent;
  let fixture: ComponentFixture<WrgDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

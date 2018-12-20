import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgSingleComponent } from './wrg-single.component';

describe('WrgSingleComponent', () => {
  let component: WrgSingleComponent;
  let fixture: ComponentFixture<WrgSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

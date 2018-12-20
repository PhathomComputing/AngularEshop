import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgBodyComponent } from './wrg-body.component';

describe('WrgBodyComponent', () => {
  let component: WrgBodyComponent;
  let fixture: ComponentFixture<WrgBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgGridComponent } from './wrg-grid.component';

describe('WrgGridComponent', () => {
  let component: WrgGridComponent;
  let fixture: ComponentFixture<WrgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

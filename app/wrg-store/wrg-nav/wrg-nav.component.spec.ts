import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgNavComponent } from './wrg-nav.component';

describe('WrgNavComponent', () => {
  let component: WrgNavComponent;
  let fixture: ComponentFixture<WrgNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

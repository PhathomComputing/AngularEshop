import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';

import { WrgFooterComponent } from './wrg-footer.component';

describe('WrgFooterComponent', () => {
  let component: WrgFooterComponent;
  let fixture: ComponentFixture<WrgFooterComponent>;
  let copyDate: string;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  (function() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    copyDate = h + ":" + m + ":" + s;
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgProductComponent } from './wrg-product.component';

describe('WrgProductComponent', () => {
  let component: WrgProductComponent;
  let fixture: ComponentFixture<WrgProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

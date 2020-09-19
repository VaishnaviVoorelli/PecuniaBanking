import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustaccountComponent } from './viewcustaccount.component';

describe('ViewcustaccountComponent', () => {
  let component: ViewcustaccountComponent;
  let fixture: ComponentFixture<ViewcustaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {WidgetACounterComponent} from './widget-a-counter.component';

describe('WidgetACounterComponent', () => {
  let component: WidgetACounterComponent;
  let fixture: ComponentFixture<WidgetACounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetACounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetACounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

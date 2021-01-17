import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {WidgetBSecondRouteComponent} from './widget-b-second-route.component';

describe('WidgetBSecondRouteComponent', () => {
  let component: WidgetBSecondRouteComponent;
  let fixture: ComponentFixture<WidgetBSecondRouteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetBSecondRouteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBSecondRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

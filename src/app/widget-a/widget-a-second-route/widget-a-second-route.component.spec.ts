import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {WidgetASecondRouteComponent} from './widget-a-second-route.component';

describe('WidgetASecondRouteComponent', () => {
  let component: WidgetASecondRouteComponent;
  let fixture: ComponentFixture<WidgetASecondRouteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetASecondRouteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetASecondRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

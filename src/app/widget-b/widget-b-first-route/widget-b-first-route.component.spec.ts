import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetBFirstRouteComponent} from './widget-b-first-route.component';

describe('WidgetBFirstRouteComponent', () => {
  let component: WidgetBFirstRouteComponent;
  let fixture: ComponentFixture<WidgetBFirstRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetBFirstRouteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBFirstRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

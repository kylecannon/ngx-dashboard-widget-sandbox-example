import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetAFirstRouteComponent} from './widget-a-first-route.component';

describe('WidgetAFirstRouteComponent', () => {
  let component: WidgetAFirstRouteComponent;
  let fixture: ComponentFixture<WidgetAFirstRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetAFirstRouteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAFirstRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

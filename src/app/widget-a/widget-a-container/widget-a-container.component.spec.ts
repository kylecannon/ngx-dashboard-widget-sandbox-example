import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetAContainerComponent} from './widget-a-container.component';

describe('WidgetAContainerComponent', () => {
  let component: WidgetAContainerComponent;
  let fixture: ComponentFixture<WidgetAContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetAContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

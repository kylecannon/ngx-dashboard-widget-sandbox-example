import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetAContainerComponent } from './widget-a-container.component';

describe('WidgetAContainerComponent', () => {
  let component: WidgetAContainerComponent;
  let fixture: ComponentFixture<WidgetAContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetAContainerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

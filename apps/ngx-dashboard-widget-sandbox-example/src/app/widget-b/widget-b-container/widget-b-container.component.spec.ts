import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetBContainerComponent } from './widget-b-container.component';

describe('WidgetBContainerComponent', () => {
  let component: WidgetBContainerComponent;
  let fixture: ComponentFixture<WidgetBContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetBContainerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

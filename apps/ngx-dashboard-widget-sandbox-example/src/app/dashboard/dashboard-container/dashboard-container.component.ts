import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvailableWidgets, WidgetRegistration } from '../widget-map';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

interface WidgetMap {
  [uuid: string]: WidgetRegistration;
}

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent {
  readonly widgetMap = AvailableWidgets.reduce(
    (acc, widget) => ({
      ...acc,
      [widget.name]: widget,
    }),
    {}
  );
  widgets: WidgetMap = AvailableWidgets.reduce(
    (acc, widget) => ({
      ...acc,
      [uuid.v4()]: widget,
    }),
    {}
  );

  constructor(public store$: Store<State>) {}

  trackByIdx(idx: number) {
    return idx;
  }

  trackByKey(idx: number, item: { key: string; value: string }) {
    return item.key;
  }

  addWidget(widgetKey: string) {
    this.widgets = {
      ...this.widgets,
      [uuid.v4()]: this.widgetMap[widgetKey],
    };
  }

  removeWidget(key: string) {
    const { [key]: removedWidget, ...widgets } = this.widgets;
    this.widgets = widgets;
  }
}

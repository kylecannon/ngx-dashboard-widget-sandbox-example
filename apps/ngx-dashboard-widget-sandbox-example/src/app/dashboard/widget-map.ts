import { Type } from '@angular/core';
import { LoadableWidget } from '../widget-utils/loadable-widget';

export interface WidgetRegistration {
  name: string;
  bundle: () => Promise<Type<LoadableWidget>>;
}

export const AvailableWidgets = [
  {
    name: 'Widget A',
    bundle: () =>
      import('../widget-a/widget-a.module').then((m) => m.WidgetAModule),
  },
  {
    name: 'Widget B',
    bundle: () =>
      import('../widget-b/widget-b.module').then((m) => m.WidgetBModule),
  },
];

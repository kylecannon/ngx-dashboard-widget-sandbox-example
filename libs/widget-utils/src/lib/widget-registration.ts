import { Type } from '@angular/core';
import { LoadableWidget } from '@angular-mfe-sandbox/widget-utils';

export interface WidgetRegistration {
  name: string;
  bundle: () => Promise<Type<LoadableWidget>>;
}

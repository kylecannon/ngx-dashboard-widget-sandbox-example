import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { WidgetAModule } from '@angular-mfe-sandbox/widget-a';
import { LoadableWidget } from '@angular-mfe-sandbox/widget-utils';

@NgModule({
  imports: [WidgetAModule],
})
export class MfeAppModule implements LoadableWidget {
  EntryComponent = this.widgetAModule.EntryComponent;

  constructor(private readonly widgetAModule: WidgetAModule) {
    console.log('widget a app module loaded');
  }
}

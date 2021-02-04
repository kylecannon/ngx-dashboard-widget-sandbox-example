import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetAModule } from '@angular-mfe-sandbox/widget-a';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WidgetAModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MfeAppModule } from './mfe-app.module';

@NgModule({
  imports: [
    BrowserModule,
    MfeAppModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('widget b app module loaded');
  }
}

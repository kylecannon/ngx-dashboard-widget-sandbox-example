import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '@angular-mfe-sandbox/dashboard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardModule, RouterModule.forRoot([], {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

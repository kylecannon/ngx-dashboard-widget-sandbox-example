import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TohAppModule, AppComponent} from '@angular-mfe-sandbox/toh';

@NgModule({
  imports: [
    BrowserModule,
    TohAppModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { TohAppModule } from '@angular-mfe-sandbox/toh';
import { LoadableWidget } from '@angular-mfe-sandbox/widget-utils';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [TohAppModule, HttpClientModule],
})
export class TohMfeAppModule implements LoadableWidget {
  EntryComponent = this.tohApp.EntryComponent;
  constructor(private tohApp: TohAppModule) {}
}

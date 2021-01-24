import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetLazySandboxComponent } from './widget-lazy-sandbox/widget-lazy-sandbox.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WidgetLazySandboxComponent],
  exports: [WidgetLazySandboxComponent],
  imports: [CommonModule, MatButtonModule],
})
export class WidgetUtilsModule {}

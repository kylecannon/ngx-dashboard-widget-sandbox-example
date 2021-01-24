import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { Route, RouterModule } from '@angular/router';
import { WidgetUtilsModule } from '@angular-mfe-sandbox/widget-utils';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

const routes: Route[] = [
  {
    path: '',
    component: DashboardContainerComponent,
  },
];

@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetUtilsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
  ],
})
export class DashboardModule {}

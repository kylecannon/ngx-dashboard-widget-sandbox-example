import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { Route, RouterModule } from '@angular/router';
import { WidgetUtilsModule } from '@angular-mfe-sandbox/widget-utils';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { metaReducers } from '../../../../apps/mfe-app/src/app/reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '../../../../apps/mfe-app/src/app/custom-route-serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: CustomSerializer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    RouterModule.forChild(routes),
    WidgetUtilsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
  ],
})
export class DashboardModule {}

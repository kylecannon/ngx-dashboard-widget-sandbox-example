import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetAContainerComponent } from './widget-a-container/widget-a-container.component';
import { WidgetAFirstRouteComponent } from './widget-a-first-route/widget-a-first-route.component';
import { WidgetASecondRouteComponent } from './widget-a-second-route/widget-a-second-route.component';
import { Route, RouterModule } from '@angular/router';
import { LoadableWidget } from '../widget-utils/loadable-widget';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { WidgetACounterComponent } from './widget-a-counter/widget-a-counter.component';
import { MatButtonModule } from '@angular/material/button';
import { metaReducers } from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '../custom-route-serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

const routes: Route[] = [
  {
    path: 'first',
    component: WidgetAFirstRouteComponent,
  },
  {
    path: 'second',
    component: WidgetASecondRouteComponent,
  },
];

@NgModule({
  declarations: [
    WidgetAContainerComponent,
    WidgetAFirstRouteComponent,
    WidgetASecondRouteComponent,
    WidgetACounterComponent,
  ],
  exports: [WidgetAContainerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
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
      logOnly: environment.production,
    }),
  ],
  entryComponents: [WidgetAContainerComponent],
})
export class WidgetAModule implements LoadableWidget {
  EntryComponent = WidgetAContainerComponent;
}

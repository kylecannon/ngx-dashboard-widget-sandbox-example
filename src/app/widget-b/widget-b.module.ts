import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetBContainerComponent} from './widget-b-container/widget-b-container.component';
import {WidgetBFirstRouteComponent} from './widget-b-first-route/widget-b-first-route.component';
import {WidgetBSecondRouteComponent} from './widget-b-second-route/widget-b-second-route.component';
import {Route, RouterModule} from '@angular/router';
import {LoadableWidget} from '../widget-utils/loadable-widget';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {WidgetBScoreboardComponent} from './widget-b-scoreboard/widget-b-scoreboard.component';
import {MatButtonModule} from '@angular/material/button';
import {metaReducers} from './reducers';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from '../custom-route-serializer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';

const routes: Route[] = [
  {
    path: 'first',
    component: WidgetBFirstRouteComponent
  },
  {
    path: 'second',
    component: WidgetBSecondRouteComponent
  }
];

@NgModule({
  declarations: [WidgetBContainerComponent, WidgetBFirstRouteComponent, WidgetBSecondRouteComponent, WidgetBScoreboardComponent],
  exports: [
    WidgetBContainerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: CustomSerializer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  entryComponents: [WidgetBContainerComponent]
})
export class WidgetBModule implements LoadableWidget {
  EntryComponent = WidgetBContainerComponent;
}

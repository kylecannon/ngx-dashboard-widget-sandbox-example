import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'mfe-widget-a',
          loadChildren: () =>
            loadRemoteModule({
              remoteName: 'mfe_widget_a',
              exposedModule: './Module',
            }).then((m) => m.MfeAppModule),
        },
        {
          path: 'mfe-widget-b',
          loadChildren: () =>
            loadRemoteModule({
              remoteName: 'mfe_widget_b',
              exposedModule: './Module',
            }).then((m) => m.MfeAppModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

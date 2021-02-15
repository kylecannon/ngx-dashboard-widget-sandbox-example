import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhyComponent } from './why/why.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe_dashboard',
        exposedModule: './Module',
      }).then((m) => m.MfeAppModule),
  },
  {
    path: '',
    component: WhyComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

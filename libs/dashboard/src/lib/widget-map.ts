import { loadRemoteModule } from '@angular-architects/module-federation';

export const AvailableWidgets = [
  {
    name: 'Widget A',
    bundle: () =>
      loadRemoteModule({
        remoteName: 'mfe_widget_a',
        exposedModule: './Module',
      }).then((m) => m.MfeAppModule),
  },
  {
    name: 'Widget B',
    bundle: () =>
      import('@angular-mfe-sandbox/widget-b').then((m) => m.WidgetBModule),
  },
  {
    name: 'Tour of Heros',
    bundle: () =>
      import('@angular-mfe-sandbox/toh').then((m) => m.TohAppModule),
  },
];

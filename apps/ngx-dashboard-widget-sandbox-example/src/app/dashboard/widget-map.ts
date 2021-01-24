export const AvailableWidgets = [
  {
    name: 'Widget A',
    bundle: () =>
      import('@angular-mfe-sandbox/widget-a').then((m) => m.WidgetAModule),
  },
  {
    name: 'Widget B',
    bundle: () =>
      import('@angular-mfe-sandbox/widget-b').then((m) => m.WidgetBModule),
  },
];

import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:4001/remoteEntry.js', 'mfe_widget_a'),
  loadRemoteEntry('http://localhost:4002/remoteEntry.js', 'mfe_widget_b'),
  loadRemoteEntry('http://localhost:4003/remoteEntry.js', 'mfe_toh'),
  loadRemoteEntry('http://localhost:4004/remoteEntry.js', 'mfe_dashboard'),
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // Disabled changeDetection due to the fact that the tour of heros needs Zone.js to properly work.
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-widget-a-container',
  templateUrl: './widget-a-container.component.html',
  styleUrls: ['./widget-a-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetAContainerComponent implements OnInit {
  constructor(public store$: Store<State>) {}

  ngOnInit() {}
}

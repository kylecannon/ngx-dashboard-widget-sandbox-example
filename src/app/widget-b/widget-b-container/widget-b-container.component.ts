import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';

@Component({
  selector: 'app-widget-b-container',
  templateUrl: './widget-b-container.component.html',
  styleUrls: ['./widget-b-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetBContainerComponent implements OnInit {
  constructor(public store$: Store<State>) {
  }

  ngOnInit() {
  }

}

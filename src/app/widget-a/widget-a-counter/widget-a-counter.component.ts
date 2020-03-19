import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../reducers';
import {decrementCount, incrementCount} from '../actions/counter.actions';

@Component({
  selector: 'app-widget-a-counter',
  templateUrl: './widget-a-counter.component.html',
  styleUrls: ['./widget-a-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetACounterComponent {
  count$ = this.store$.pipe(select(state => state.counter.count));

  constructor(private store$: Store<State>) {
  }

  incrementCount() {
    this.store$.dispatch(incrementCount());
  }

  decrementCount() {
    this.store$.dispatch(decrementCount());
  }


}

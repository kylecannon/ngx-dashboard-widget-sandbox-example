import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { awayScore, homeScore } from '../actions/scoreboard-page.actions';

@Component({
  selector: 'app-widget-b-scoreboard',
  templateUrl: './widget-b-scoreboard.component.html',
  styleUrls: ['./widget-b-scoreboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBScoreboardComponent {
  scoreboard$ = this.store$.pipe(select((state) => state.scoreboard));
  homeScore$ = this.scoreboard$.pipe(select((state) => state.home));
  awayScore$ = this.scoreboard$.pipe(select((state) => state.away));

  constructor(private store$: Store<State>) {}

  addPointToHome() {
    this.store$.dispatch(homeScore());
  }

  addPointToAway() {
    this.store$.dispatch(awayScore());
  }
}

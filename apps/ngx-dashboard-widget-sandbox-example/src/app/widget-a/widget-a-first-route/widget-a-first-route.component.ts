import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-a-first-route',
  templateUrl: './widget-a-first-route.component.html',
  styleUrls: ['./widget-a-first-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetAFirstRouteComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

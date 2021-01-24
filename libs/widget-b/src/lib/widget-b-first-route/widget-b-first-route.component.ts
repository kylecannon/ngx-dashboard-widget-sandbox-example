import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-b-first-route',
  templateUrl: './widget-b-first-route.component.html',
  styleUrls: ['./widget-b-first-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBFirstRouteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

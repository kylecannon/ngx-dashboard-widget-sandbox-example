import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-b-second-route',
  templateUrl: './widget-b-second-route.component.html',
  styleUrls: ['./widget-b-second-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBSecondRouteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

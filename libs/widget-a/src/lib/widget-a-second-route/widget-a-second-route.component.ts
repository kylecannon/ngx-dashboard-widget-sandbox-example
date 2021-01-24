import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-a-second-route',
  templateUrl: './widget-a-second-route.component.html',
  styleUrls: ['./widget-a-second-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetASecondRouteComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

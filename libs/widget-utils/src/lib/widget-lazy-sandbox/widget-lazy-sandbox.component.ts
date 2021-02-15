import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetLoader } from '../widget-loader.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'widget-lazy-sandbox',
  styleUrls: ['./widget-lazy-sandbox.component.scss'],
  templateUrl: './widget-lazy-sandbox.component.html',
  // Disabled changeDetection due to the fact that the tour of heros needs Zone.js to properly work.
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetLazySandboxComponent implements OnChanges {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  widgetModuleCreated = false;
  @Input() moduleName: string;
  @Input() id: string;
  @Output() widgetRemoved = new EventEmitter<never>();

  constructor(
    private injector: Injector,
    private readonly widgetLoader: WidgetLoader
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.widgetModuleCreated) {
      return;
    }
    if (changes && changes.moduleName && changes.moduleName.currentValue) {
      const moduleName = changes.moduleName.currentValue;
      this.widgetLoader
        .createWidget(moduleName, this.injector)
        .pipe(first())
        .subscribe((ngModuleRef) => {
          this.widgetModuleCreated = true;
          const injector = ngModuleRef.injector;
          const router = ngModuleRef.injector.get(Router);
          const componentFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(
            ngModuleRef.instance.EntryComponent
          );
          const entryComponentRef = this.vcr.createComponent(
            componentFactory,
            0,
            injector
          );
          router.initialNavigation();
          entryComponentRef.changeDetectorRef.detectChanges();
        });
    }
  }
}

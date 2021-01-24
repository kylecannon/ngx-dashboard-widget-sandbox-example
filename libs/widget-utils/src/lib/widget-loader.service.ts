import {
  Compiler,
  Injectable,
  Injector,
  NgModuleFactory,
  Type,
} from '@angular/core';
import { fromPromise } from 'rxjs/internal-compatibility';
import { PlatformLocation } from '@angular/common';
import { WidgetPlatformLocation } from './widget-platform-location';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WidgetRegistration } from './widget-registration';

@Injectable({
  providedIn: 'root',
})
export class WidgetLoader {
  constructor(private compiler: Compiler) {}

  createParentInjector(injector: Injector) {
    return Injector.create({
      providers: [
        {
          provide: Router,
          useValue: null,
        },
        {
          provide: Store,
          useValue: null,
        },
        {
          provide: PlatformLocation,
          useClass: WidgetPlatformLocation,
          deps: [],
        },
      ],
      parent: injector,
    });
  }

  createWidget(widgetRegistration: WidgetRegistration, injector: Injector) {
    return fromPromise(
      widgetRegistration
        .bundle()
        .then((loadableWidget) =>
          this.compiler.compileModuleAsync(loadableWidget)
        )
        .then((ngModuleFactory) =>
          ngModuleFactory.create(this.createParentInjector(injector))
        )
    );
  }
}

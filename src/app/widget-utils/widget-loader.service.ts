import {Compiler, Injectable, Injector, NgModuleFactory} from '@angular/core';
import {fromPromise} from 'rxjs/internal-compatibility';
import {PlatformLocation} from '@angular/common';
import {WidgetPlatformLocation} from './widget-platform-location';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {WidgetRegistration} from '../dashboard/widget-map';


@Injectable({
  providedIn: 'root',
})
export class WidgetLoader {
  constructor(private compiler: Compiler) {
  }

  createWidget(widgetRegistration: WidgetRegistration, injector: Injector) {
    const widgetInjector = Injector.create({
      providers: [
        {
          provide: Router,
          useValue: null
        },
        {
          provide: Store,
          useValue: null,
        },
        {
          provide: PlatformLocation,
          useClass: WidgetPlatformLocation,
          deps: [],
        }
      ],
      parent: injector,
    });
    return fromPromise(widgetRegistration.bundle()
      .then(loadableWidget => this.compiler.compileModuleAsync(loadableWidget))
      .then(ngModuleFactory => ngModuleFactory.create(widgetInjector)));
  }
}

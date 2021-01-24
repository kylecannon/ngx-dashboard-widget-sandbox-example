[![Netlify Status](https://api.netlify.com/api/v1/badges/ebfd4a53-ce46-4b6b-84f6-cd63985cb9cc/deploy-status)](https://app.netlify.com/sites/ngx-dashboard-widget-sandbox-example/deploys)

[Demo](https://ngx-dashboard-widget-sandbox-example.netlify.com/#/dashboard)

## The Problem

### Routing

The Angular Router was designed specifically for tying what is shown on the page to the location in the Browser. However, in some instances this can be behavior that is not desired. A good example of this is a dashboard with complex and rich widgets (charting, single metric, etc). The default routing solution works really well until a widget such as a graph (with multiple routes) needs to be rendered multiple times on the page for different metrics.

### Unintended Service Sharing

Another issue that will take place is any Modules or Providers that are used in the widget will be shared across all instances of that widget. A good example is if we wanted to render out a chart and use [ngrx](https://ngrx.io) to handle the polling and state management. This would become an issue with a single instance of ngrx because actions would bleed across widgets instead of being isolated to it's own widget.


## The Solution

### Sandboxing via Injector

Due to the power of Angular's Dependency Injection, we can create an isolated injector per widget. We can accomplish this by creating a custom service that provides code-splitting for each widget. This is accomplished by using the widget host component as the parent injector for each widget.

### Allowing for Multiple Routers and Ngrx Stores

When we create our sandbox, we will also need to provide our own ["override"](https://github.com/kylecannon/ngx-dashboard-widget-sandbox-example/blob/master/src/app/widget-utils/widget-loader.service.ts) for `Router` and `Store` and `PlatformLocation`. Overriding the PlatformLocation at the widget level is the key to allowing multiple routers to exist. The parent (root app router) will still have it's default behavior of deep linking, but the widgets will use an ["in memory"](https://github.com/kylecannon/ngx-dashboard-widget-sandbox-example/blob/master/src/app/widget-utils/widget-platform-location.ts) url.

### Treating the widget as "root"

With this setup, each widget that is created will have it's own "root NgModule" so to speak. Since the parent injector reset the `Router` and the `Store` to null, we can redefine them in the Root NgModule for each widget, creating an isolated environment for each widget.
- [WidgetAModule](https://github.com/kylecannon/ngx-dashboard-widget-sandbox-example/blob/master/src/app/widget-a/widget-a.module.ts)
- [WidgetBModule](https://github.com/kylecannon/ngx-dashboard-widget-sandbox-example/blob/master/src/app/widget-b/widget-b.module.ts)

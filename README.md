# CharonFront

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## About the Router

The implementation of our Router is noted below

**Note: test.component.ts is just for demonstration usage and is configured to be on the root path --> '/'**

######Import statement in app.module.ts so we can use the module:
```typescript
import { RouterModule } from '@angular/router';
```

######RouterModule is included in the imports attribute in same file (app.module.ts):
```typescript
imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: TestComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
```

######Router-outlet tag used in app.component.html, which is the root element's html:
```typescript
<h1>
  {{title}}
</h1>

<!-- Routed views goes here -->
<router-outlet></router-outlet>
```

Source: https://angular.io/docs/ts/latest/guide/router.html

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

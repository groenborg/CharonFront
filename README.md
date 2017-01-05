# CharonFront

##CI pipeline

The tool we used for our pipelines on our web application 
[CharonFront](https://github.com/groenborg/CharonFront) and our backend application [CharonBack](https://github.com/groenborg/CharonFront) was a system  called [distelli](https://www.distelli.com). Distelli not only supports the basic CI functionality, such as building your apps and running your tests for verification, it has a complete system deploying your applications on connected servers, pushing finished builds to your private registries or public. It natively works with docker. 


###Build setup
**It works like this:** 
Push to develop branch>> 
GitHub triggers build on distelli >> 
builds >> run tests >> create docker image >> 
pushes image to our [dockerhub](https://hub.docker.com/r/groenborg/charon-frontend/) >> 
deploys container on digital ocean server >>
sends notification on slack 

###Contract
The contract uses Jenkins, and artifactory for build artifacts. Theses artifacts are managed dependencies in our projects, which our build/dep tool [gradle](https://gradle.org) manages. 

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

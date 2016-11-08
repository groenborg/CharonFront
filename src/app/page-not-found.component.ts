import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1 class="oops">404</h1>
    <h1>Sorry, page not found</h1>
    `,
  styles: [`
    .oops { 
    font-weight: bolder; 
    font-family: Courier;
    color: darkred; 
    font-size: 400%}
`]
})
export class PageNotFoundComponent {

  constructor() { }


}

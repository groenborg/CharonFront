import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-reservation',
  template: `
    <p>
      create-reservation markup goes here!
    </p>
    <departure-list [label]="'Single-trip'"></departure-list>
  `,
  styles: []
})
export class CreateReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

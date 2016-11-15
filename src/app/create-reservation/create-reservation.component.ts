import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-reservation',
  template: `
    <p>
      create-reservation Works!
    </p>
    <schedule-list></schedule-list>
  `,
  styles: []
})
export class CreateReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

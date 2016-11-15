import { Component, OnInit, Input } from '@angular/core';
import { Departure } from '../model/departure';
import { DEPARTURES } from './mock-departures';

@Component({
  selector: 'departure-list',
  templateUrl: 'departure-list.component.html',
  styleUrls: ['departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  @Input()
  label: string;
  allDepartures: Departure[] = DEPARTURES;
  start: number = 0;
  //TODO: Could later be annotated with @Output, so the containing component, will get
  //TODO:  a notification whenever a schedule has been selected. (search for ng2 Eventemitter)
  selectedDepartureIndex: number;
  displayedDepartures: Departure[];
  listSize: number = 8;

  constructor() { }

  ngOnInit() {
    this.updateDisplayedDepartures();
  }

  //TODO: Will contain the emitting function-call from the @Output attribute
  onSelect(index: number){
    this.selectedDepartureIndex = index;
  }

  updateDisplayedDepartures(){
    this.displayedDepartures = [];
    for(var i = 0; i < this.listSize; i++){
      // just pushing a non-specified Departure
      this.displayedDepartures.push(new Departure(new Date()));
      // then defining it
      this.displayedDepartures[i] = this.allDepartures[this.start+i];
    }
  }

  nextDepartures(){
    if(this.start + 1 <= this.allDepartures.length - this.listSize){
      this.start = this.start + 1;
      this.selectedDepartureIndex--;
      this.updateDisplayedDepartures();
    }
  }

  previousDepartues(){
    if(this.start - 1 >= 0){
      this.start = this.start - 1;
      this.selectedDepartureIndex++;
      this.updateDisplayedDepartures();
    }
  }

}

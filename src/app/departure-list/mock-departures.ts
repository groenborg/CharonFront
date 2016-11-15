/**
 * Created by cm on 15/11/2016.
 */
import { Departure } from '../model/departure';

// TODO: Date constructor is as follows:
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// - Only the fourth ('hours') and the fifth ('minutes') parameter, are useful here.
var departures = [
  new Departure(new Date(2016, 1, 1, 10, 0, 0, 0)),
  new Departure(new Date(2016, 1, 1, 10, 15, 0, 0)),
  new Departure(new Date(2016, 1, 1, 10, 30, 0, 0)),
  new Departure(new Date(2016, 1, 1, 10, 45, 0, 0)),
  new Departure(new Date(2016, 1, 1, 11, 0, 0, 0)),
  new Departure(new Date(2016, 1, 1, 11, 15, 0, 0)),
  new Departure(new Date(2016, 1, 1, 11, 30, 0, 0)),
  new Departure(new Date(2016, 1, 1, 11, 45, 0, 0)),
  new Departure(new Date(2016, 1, 1, 12, 0, 0, 0)),
  new Departure(new Date(2016, 1, 1, 12, 15, 0, 0)),
  new Departure(new Date(2016, 1, 1, 12, 30, 0, 0)),
  new Departure(new Date(2016, 1, 1, 12, 45, 0, 0)),
  new Departure(new Date(2016, 1, 1, 13, 0, 0, 0))
];

export var DEPARTURES: Departure[] = departures;


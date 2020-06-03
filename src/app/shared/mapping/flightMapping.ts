import { Flight } from '../models/flight';
export class FlightMapping{

    static mapFlightToList(item: Flight) {
        return {
          ...item
        }
    }



}
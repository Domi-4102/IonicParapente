import { Pilot } from '../models/pilot';
export class PilotMapping{

    static mapPilotToList(item: Pilot) {
        return {
          ...item
        }
    }



}
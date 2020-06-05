import { Paraglider } from '../models/paraglider';
export class ParagliderMapping{

    static mapParagliderToList(item: Paraglider) {
        return {
          ...item
        }
    }



}
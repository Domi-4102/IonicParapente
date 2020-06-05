import { Site } from '../models/site';
export class SiteMapping{

    static mapSiteToList(item: Site) {
        return {
          ...item
        }
    }



}
export interface Site {
    id: number;
    name: string;
    orientation: string;
    altitudeTakeOff: number;
    approachManeuver: string;
    siteGeoCoordinate?: any;
    numberOfUse: number;
    siteType: number;
    levelId: number;
}
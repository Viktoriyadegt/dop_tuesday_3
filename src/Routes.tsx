// @flow 
import * as React from 'react';
import {Route} from "./Route";
import {RouteType} from "./FlightTable";

type Props = {
    flightTableID: string;
    routes: RouteType[];
    toggleFTIsBooked: (flightID: string, routeID: string, isBooked:boolean) => void;
    updateFTRoutesFrom: (flightID: string, routeID: string, newFrom: string) => void;
    updateFTRoutesTo: (flightID: string, routeID: string, newTo: string) => void;
    removeFTRoute: (flightTableID: string, routeID: string) => void
};
export const Routes = ({
                           routes,
                           toggleFTIsBooked,
                           flightTableID,
                           updateFTRoutesFrom,
                           updateFTRoutesTo,
                           removeFTRoute
                       }: Props) => {

    return <div> {routes.map((route) => {

            return <Route key={route.id}
                               route={route}
                               toggleFTIsBooked={toggleFTIsBooked}
                               flightTableID={flightTableID}
                               updateFTRoutesFrom={updateFTRoutesFrom}
                               updateFTRoutesTo={updateFTRoutesTo}
                               removeFTRoute={removeFTRoute}
            />

        }
    )
    }</div>


};
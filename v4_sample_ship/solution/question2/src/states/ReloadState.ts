import { State } from "./State.ts";
import { Ship } from "../Ship.ts";

export class ReloadState implements State {

    public leftArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy reloading");
    }

    public rightArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy reloading");
    }

    public spaceKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy reloading");
    }

    public reloadKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy reloading");
    }

    public entry(ship: Ship): void {
        // entry / missiles = 3
        ship.setMissiles(3);
        console.log("Reloaded - missiles: 3");

        // completion transition - straight back to STATIONARY
        console.log("Changing from RELOAD to STATIONARY");
        const newState = ship.getStationaryState();
        ship.setState(newState);
    }

    public toString(): string {
        return "RELOAD";
    }
}

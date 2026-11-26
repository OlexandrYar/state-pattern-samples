import { State } from "./State.ts";
import { Ship } from "../Ship.ts";

export class MoveRightState implements State {

    public leftArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy moving right");
    }

    public rightArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy moving right");
    }

    public spaceKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy moving right");
    }

    public reloadKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy moving right");
    }

    public entry(ship: Ship): void {
        // entry / x++
        ship.setX(ship.getX() + 1);
        console.log(`Ship moves right, x is now ${ship.getX()}`);

        // completion transition - straight back to STATIONARY
        console.log("Changing from MOVE_RIGHT to STATIONARY");
        const newState = ship.getStationaryState();
        ship.setState(newState);
    }

    public toString(): string {
        return "MOVE_RIGHT";
    }
}

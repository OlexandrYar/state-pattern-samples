import { State } from "./State.ts";
import { Ship } from "../Ship.ts";

export class MoveLeftState implements State {

    public leftArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy moving left");
    }

    public rightArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy moving left");
    }

    public spaceKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy moving left");
    }

    public entry(ship: Ship): void {
        // entry / x--
        ship.setX(ship.getX() - 1);
        console.log(`Ship moves left, x is now ${ship.getX()}`);

        // completion transition - straight back to STATIONARY
        console.log("Changing from MOVE_LEFT to STATIONARY");
        const newState = ship.getStationaryState();
        ship.setState(newState);
    }

    public toString(): string {
        return "MOVE_LEFT";
    }
}

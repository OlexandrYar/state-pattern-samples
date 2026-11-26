import { State } from "./State.ts";
import { Ship } from "../Ship.ts";

export class StationaryState implements State {

    public leftArrowKeyPressed(ship: Ship): void {
        console.log("Changing from STATIONARY to MOVE_LEFT");
        const newState = ship.getMoveLeftState();
        ship.setState(newState);
    }

    public rightArrowKeyPressed(ship: Ship): void {
        console.log("Changing from STATIONARY to MOVE_RIGHT");
        const newState = ship.getMoveRightState();
        ship.setState(newState);
    }

    public spaceKeyPressed(ship: Ship): void {
        console.log("Changing from STATIONARY to FIRE_MISSILE");
        const newState = ship.getFireMissileState();
        ship.setState(newState);
    }

    public entry(ship: Ship): void {
        console.log("(no actions for entry event)");
    }

    public toString(): string {
        return "STATIONARY";
    }
}

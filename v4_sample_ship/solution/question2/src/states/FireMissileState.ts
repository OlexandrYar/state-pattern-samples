import { State } from "./State.ts";
import { Ship } from "../Ship.ts";

export class FireMissileState implements State {

    public leftArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy firing");
    }

    public rightArrowKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy firing");
    }

    public spaceKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy firing");
    }

    public reloadKeyPressed(ship: Ship): void {
        console.log("Can't do that - the ship is busy firing");
    }

    public entry(ship: Ship): void {
        // entry / fireMissile(); missiles--
        ship.fireMissile();
        ship.setMissiles(ship.getMissiles() - 1);
        console.log(`Missiles left: ${ship.getMissiles()}`);

        // completion transition - straight back to STATIONARY
        console.log("Changing from FIRE_MISSILE to STATIONARY");
        const newState = ship.getStationaryState();
        ship.setState(newState);
    }

    public toString(): string {
        return "FIRE_MISSILE";
    }
}

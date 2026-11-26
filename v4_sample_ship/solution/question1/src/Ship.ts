import { State } from "./states/State.ts";
import { StationaryState } from "./states/StationaryState.ts";
import { MoveLeftState } from "./states/MoveLeftState.ts";
import { MoveRightState } from "./states/MoveRightState.ts";
import { FireMissileState } from "./states/FireMissileState.ts";

export class Ship {
    private stationaryState: State;
    private moveLeftState: State;
    private moveRightState: State;
    private fireMissileState: State;

    private state: State;
    private x: number;

    // create(initialX) / x = initialX
    constructor(initialX: number) {
        this.x = initialX;

        // V4: states do NOT get the ship in the constructor
        this.stationaryState = new StationaryState();
        this.moveLeftState = new MoveLeftState();
        this.moveRightState = new MoveRightState();
        this.fireMissileState = new FireMissileState();

        this.state = this.stationaryState;
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public fireMissile(): void {
        console.log(`*** missile fired from x = ${this.x} ***`);
    }

    public setState(state: State): void {
        this.state = state;
        this.state.entry(this);
    }

    public getState(): State {
        return this.state;
    }

    public getStationaryState(): State {    return this.stationaryState;    }
    public getMoveLeftState(): State {      return this.moveLeftState;      }
    public getMoveRightState(): State {     return this.moveRightState;     }
    public getFireMissileState(): State {   return this.fireMissileState;   }

    // delegate the EVENTS - pass "this" (the ship) to the state
    public leftArrowKeyPressed(): void {
        this.state.leftArrowKeyPressed(this);
    }

    public rightArrowKeyPressed(): void {
        this.state.rightArrowKeyPressed(this);
    }

    public spaceKeyPressed(): void {
        this.state.spaceKeyPressed(this);
    }
}

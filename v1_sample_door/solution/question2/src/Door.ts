import { State } from "./states/State.ts";
import { OpenState } from "./states/OpenState.ts";
import { ClosedState } from "./states/ClosedState.ts";
import { LockedState } from "./states/LockedState.ts";
import { AlarmState } from "./states/AlarmState.ts";

export class Door {
    private openState: State;
    private closedState: State;
    private lockedState: State;
    private alarmState: State;

    private state: State;

    constructor() {
        // cached variant: each state gets "this" (the Door) once, in its constructor
        this.openState = new OpenState(this);
        this.closedState = new ClosedState(this);
        this.lockedState = new LockedState(this);
        this.alarmState = new AlarmState(this);

        // initial state (the black dot "new" points at Closed)
        this.state = this.closedState;
    }

    public getOpenState(): State { return this.openState; }
    public getClosedState(): State { return this.closedState; }
    public getLockedState(): State { return this.lockedState; }
    public getAlarmState(): State { return this.alarmState; }

    public setState(state: State): void {
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }

    // events (request) - just delegate to the current state (handle)
    public open(): void { this.state.open(); }
    public close(): void { this.state.close(); }
    public lock(): void { this.state.lock(); }
    public unlock(): void { this.state.unlock(); }
    public breakIn(): void { this.state.breakIn(); }
}

import { State } from "./states/State.ts";
import { NoQuarterState } from "./states/NoQuarterState.ts";
import { HasQuarterState } from "./states/HasQuarterState.ts";
import { SoldState } from "./states/SoldState.ts";
import { SoldOutState } from "./states/SoldOutState.ts";

export class GumballMachine {
    private noQuarterState: State;
    private hasQuarterState: State;
    private soldState: State;
    private soldOutState: State;

    private state: State;
    private count: number;

    constructor(count: number){
        this.count = count;
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.soldOutState = new SoldOutState(this);

        if(this.count > 0){
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
    }

    public getCount(): number {
        return this.count;
    }

    public setCount(count: number): void {
        this.count = count;
    }

    public setState(state: State) {
        this.state = state;
        this.state.entry();
    }

    public getState(): State {
        return this.state;
    }

    public getNoQuarterState(): State {        return this.noQuarterState;    }
    public getHasQuarterState(): State {        return this.hasQuarterState;    }
    public getSoldState(): State {        return this.soldState;    }
    public getSoldOutState(): State {        return this.soldOutState;    }

    // deleget the EVENTS
    public refill(): void {
        this.state.refill();
    }

    public insertQuarter(): void {
        this.state.insertQuarter();
    }

    public ejectQuarter(): void {
        this.state.ejectQuarter();
    }

    public turnCrank(): void {
        this.state.turnCrank();
    }

    public entry(): void {
        this.state.entry();
    }

}
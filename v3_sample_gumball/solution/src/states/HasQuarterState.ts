import { State } from "./State.ts";
import { GumballMachine } from "../GumballMachine.ts";

export class HasQuarterState implements State {
    private machine: GumballMachine;

    constructor(machine: GumballMachine) {
        this.machine = machine;
    }

    public insertQuarter(): void {
        console.log("invalid event");
    }

    public ejectQuarter(): void {
        console.log("Changing back to NO QUARTER");
        const newState = this.machine.getNoQuarterState();
        this.machine.setState(newState);
    }

    public turnCrank(): void {
        console.log("Changing to SOLD state");
        const newState = this.machine.getSoldState();
        this.machine.setState(newState);
    }

    public refill(): void {
        console.log("invalid event");
    }

    public entry(): void {
        console.log("(no actions for entry event)");
    }

    public toString(): string {
        return "HAS QUARTER";
    }
}
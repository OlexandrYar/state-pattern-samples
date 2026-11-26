import { State } from "./State.ts";

export class LockedState extends State {
    public open(): void {
        console.log("You can't open the door - it is LOCKED, unlock it first");
    }

    public close(): void {
        console.log("The door is already closed (and LOCKED)");
    }

    public lock(): void {
        console.log("The door is already LOCKED");
    }

    public unlock(): void {
        console.log("The door is unlocked - it is now CLOSED");
        this.door.setState(this.door.getClosedState());
    }

    public breakIn(): void {
        console.log("Someone is forcing the locked door - ALARM!");
        this.door.setState(this.door.getAlarmState());
    }

    public toString(): string {
        return "LOCKED";
    }
}

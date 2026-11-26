import { State } from "./State.ts";

export class ClosedState extends State {
    public open(): void {
        console.log("The door opens");
        this.door.setState(this.door.getOpenState());
    }

    public close(): void {
        console.log("The door is already CLOSED");
    }

    public lock(): void {
        console.log("The door is now LOCKED");
        this.door.setState(this.door.getLockedState());
    }

    public unlock(): void {
        console.log("You can't unlock the door - it is not LOCKED");
    }

    public breakIn(): void {
        console.log("Someone is forcing the door - ALARM!");
        this.door.setState(this.door.getAlarmState());
    }

    public toString(): string {
        return "CLOSED";
    }
}

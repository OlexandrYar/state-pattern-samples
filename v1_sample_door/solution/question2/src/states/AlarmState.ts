import { State } from "./State.ts";

export class AlarmState extends State {
    public open(): void {
        console.log("ALARM! The door can't be opened - unlock it first");
    }

    public close(): void {
        console.log("ALARM! The door is already closed");
    }

    public lock(): void {
        console.log("ALARM! You can't lock the door - unlock it first");
    }

    public unlock(): void {
        console.log("Alarm switched off - the door is now CLOSED");
        this.door.setState(this.door.getClosedState());
    }

    public breakIn(): void {
        console.log("The ALARM is already ringing");
    }

    public toString(): string {
        return "ALARM";
    }
}

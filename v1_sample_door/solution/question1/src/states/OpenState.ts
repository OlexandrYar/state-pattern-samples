import { State } from "./State.ts";

export class OpenState extends State {
    public open(): void {
        console.log("The door is already OPEN");
    }

    public close(): void {
        console.log("The door closes");
        this.door.setState(this.door.getClosedState());
    }

    public lock(): void {
        console.log("You can't lock the door while it is OPEN - close it first");
    }

    public unlock(): void {
        console.log("You can't unlock the door - it is OPEN");
    }

    public toString(): string {
        return "OPEN";
    }
}

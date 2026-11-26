import { Door } from "../Door.ts";

export abstract class State {
    protected door: Door;

    constructor(door: Door) {
        this.door = door;
    }

    public abstract open(): void;
    public abstract close(): void;
    public abstract lock(): void;
    public abstract unlock(): void;
    public abstract breakIn(): void;

    public abstract toString(): string;
}

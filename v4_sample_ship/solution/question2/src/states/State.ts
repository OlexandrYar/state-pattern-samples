import { Ship } from "../Ship.ts";

export interface State {
    leftArrowKeyPressed(ship: Ship): void;
    rightArrowKeyPressed(ship: Ship): void;
    spaceKeyPressed(ship: Ship): void;
    reloadKeyPressed(ship: Ship): void;

    entry(ship: Ship): void;
    toString(): string;
}

export type Suit = "Club" | "Spade" | "Heart" | "Diamond"

export interface ICard{
    suit: Suit
    value: number
    isTrump: boolean
}

export class Card implements ICard {
    suit: Suit;
    value: number;
    isTrump: boolean;
    constructor(suit: Suit, value: number) {
        this.suit = suit;
        this.value = value;
        this.isTrump = suit === "Spade";
    }
    toString(): string {
        return `${this.value} of ${this.suit}${this.isTrump ? ' (Trump)' : ''}`;
    }
}

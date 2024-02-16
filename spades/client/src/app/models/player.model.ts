import { Card } from "./card.model";

export interface IPlayer {
    id: number;
    name: string;
    hand: Card[];
    score: number;
    bid: number;
    addCard(card: Card): void;
    playCard(cardIndex: number): Card | undefined;
    updateScore(points: number): void;
    setBid(bid: number): void;
}

export class Player implements IPlayer {
    id: number;
    name: string;
    hand: Card[] = [];
    score: number = 0;
    bid: number = 0;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    addCard(card: Card): void {
        this.hand.push(card);
    }

    playCard(cardIndex: number): Card | undefined {
        if (cardIndex >= 0 && cardIndex < this.hand.length) {
            return this.hand.splice(cardIndex, 1)[0];
        }
        return undefined; // If the index is invalid, return undefined
    }

    updateScore(points: number): void {
        this.score += points;
    }

    setBid(bid: number): void {
        this.bid = bid;
    }

    toString(): string {
        return `${this.name} (ID: ${this.id}) - Score: ${this.score}, Bid: ${this.bid}`;
    }
}

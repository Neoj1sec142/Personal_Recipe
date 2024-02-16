import { Card, Suit } from "./card.model";

export class Deck{
    cards: Card[] = [];
    constructor(){
        this.initializeDeck();
    }

    private initializeDeck(){
        const suits: Suit[] = ["Club", "Spade", "Heart", "Diamond"];
        this.cards = suits.flatMap(suit =>  Array.from({ length: 13 }, (_, i) => new Card(suit, i + 2)) );
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal(players: number, cardsPerPlayer: number): Card[][] {
        const hands: Card[][] = Array.from({ length: players }, () => []);
        for (let i = 0; i < cardsPerPlayer; i++) {
          for (let j = 0; j < players; j++) {
            if (this.cards.length > 0) {
              const card = this.cards.shift();
              if (card) {
                hands[j].push(card);
              }
            }
          }
        }
        return hands;
    }
}
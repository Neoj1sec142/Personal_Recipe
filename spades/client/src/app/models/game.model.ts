import { Card } from "./card.model";
import { Deck } from "./deck.model";
import { Player } from "./player.model";

export class Game {
    private deck: Deck;
    private players: Player[];
    private currentPlayerIndex: number = 0;
    private currentTrick: Card[] = [];
    private bids: number[] = [];
    private scores: number[] = [];
    private tricksWon: Card[][][];

    constructor(playerNames: string[]) {
        this.deck = new Deck();
        this.players = playerNames.map((name, index) => new Player(index, name));
        this.tricksWon = this.players.map(() => []);
        this.resetGame();
    }

    resetGame(): void {
        this.deck.shuffle();
        this.currentPlayerIndex = 0;
        this.currentTrick = [];
        this.bids = this.players.map(() => 0);
        this.scores = this.players.map(() => 0);
        this.tricksWon.forEach(tricks => tricks.length = 0);
        this.dealCards();
    }

    dealCards(): void {
        // Assuming a 4 player game, each player gets 13 cards
        const hands = this.deck.deal(this.players.length, 13);
        hands.forEach((hand, index) => {
            this.players[index].hand = hand;
        });
    }

    setPlayerBid(playerId: number, bid: number): void {
        this.bids[playerId] = bid;
    }

    playCard(playerId: number, cardIndex: number): boolean {
        if (playerId !== this.currentPlayerIndex) return false; // Not this player's turn

        const card = this.players[playerId].playCard(cardIndex);
        if (!card) return false; // Invalid card selection

        this.currentTrick.push(card);
        // Move to the next player or evaluate the trick if all players have played
        if (this.currentTrick.length === this.players.length) {
            this.evaluateTrick();
        } else {
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        }
        return true;
    }

    private evaluateTrick(): void {
        // Determine the winner of the trick based on Spades rules
        let winningIndex = 0;
        let highestCard = this.currentTrick[0];
        for (let i = 1; i < this.currentTrick.length; i++) {
            if ((this.currentTrick[i].suit === "Spade" && highestCard.suit !== "Spade") ||
                (this.currentTrick[i].suit === highestCard.suit && this.currentTrick[i].value > highestCard.value)) {
                highestCard = this.currentTrick[i];
                winningIndex = i;
            }
        }
        // Correctly store the trick cards in the winner's tricksWon array
        this.tricksWon[winningIndex].push([...this.currentTrick]); // Spread operator to copy the trick array
        // Reset for the next trick
        this.currentTrick = [];
        this.currentPlayerIndex = winningIndex; // Winner starts the next trick
    
        // Here, you could also update scores based on the completed trick
    }

    calculateScores(): void {
        // Calculate and update scores for each player based on their bids and tricks won
        // This method would be called at the end of each round
    }

    // Additional methods for game logic, such as handling bids, scoring, and checking game end conditions, can be added here.
}

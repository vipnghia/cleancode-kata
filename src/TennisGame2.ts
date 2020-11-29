import { throws } from "assert";
import { TennisGame } from "./TennisGame";

export class TennisGame2 implements TennisGame {
  P1point: number = 0;
  P2point: number = 0;

  P1res: string = "";
  P2res: string = "";

  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    let scoreList: string[] = ["Love", "Fifteen", "Thirty", "Forty", "Fifteen"];
    this.P1res = scoreList[this.P1point];
    this.P2res = scoreList[this.P2point];
    let score: string =
      this.P1point >= 3 ? "Deuce" : `${scoreList[this.P1point]}-All`;

    if (this.P1point !== this.P2point) {
      score = this.P1res + "-" + this.P2res;
      if (this.P1point > this.P2point) {
        if (this.P2point >= 3) {
          score = "Advantage player1";
        }
        if (
          this.P1point >= 4 &&
          this.P2point >= 0 &&
          this.P1point - this.P2point >= 2
        ) {
          score = "Win for player1";
        }
      } else {
        if (this.P1point >= 3) {
          score = "Advantage player2";
        }
        if (
          this.P2point >= 4 &&
          this.P1point >= 0 &&
          this.P2point - this.P1point >= 2
        ) {
          score = "Win for player2";
        }
      }
    }

    return score;
  }

  SetP1Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P1Score();
    }
  }

  SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P2Score();
    }
  }

  P1Score(): void {
    this.P1point++;
  }

  P2Score(): void {
    this.P2point++;
  }

  wonPoint(player: string): void {
    if (player === "player1") this.P1Score();
    else this.P2Score();
  }
}

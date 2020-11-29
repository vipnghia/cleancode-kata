import { TennisGame } from "./TennisGame";
import {
  MINUS_RESULT_LIST,
  SCORE_LIST,
  TEMP_SCORE_LIST,
} from "./TennisGame.constant";

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === "player1") this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    let score: string = "";
    let tempScore: number = 0;

    const scoreValue: string[] = ["Love-All", "Fifteen-All", "Thirty-All"];

    if (this.m_score1 === this.m_score2) {
      score = scoreValue[this.m_score1] || "Deuce";
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const minusResult: number = this.m_score1 - this.m_score2;

      if (minusResult > 1) {
        score = MINUS_RESULT_LIST["2"];
      } else {
        score = MINUS_RESULT_LIST[minusResult] || MINUS_RESULT_LIST["default"];
      }
    } else {
      for (let i = 1; i < 3; i++) {
        i === 1
          ? (tempScore = this.m_score1)
          : ((score += "-"), (tempScore = this.m_score2));

        score += TEMP_SCORE_LIST[tempScore];
      }
    }
    return score;
  }
}

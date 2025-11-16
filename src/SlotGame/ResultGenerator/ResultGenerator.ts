import { GameResult } from "../GameResult";

export class ResultGenerator {
  public generateResult(): GameResult {
    return {
      win: 0,
      spins: [],
    };
  }
}

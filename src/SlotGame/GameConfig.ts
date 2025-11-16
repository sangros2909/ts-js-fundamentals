import { Symbols } from "./GameResult";

export const gameConfig = {
  rows: 3,
  colums: 3,
  paylines: 5,

  reelDefinitions: [
    [Symbols.WILD, Symbols.HIGH1, Symbols.SCATTER, Symbols.MID1, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.SCATTER, Symbols.MID1, Symbols.WILD, Symbols.LOW1, Symbols.HIGH1, Symbols.COIN, Symbols.MID1, Symbols.SCATTER, Symbols.HIGH1, Symbols.LOW1, Symbols.WILD, Symbols.MID1, Symbols.COIN, Symbols.HIGH1, Symbols.SCATTER, Symbols.LOW1, Symbols.MID1, Symbols.WILD, Symbols.COIN, Symbols.HIGH1, Symbols.LOW1, Symbols.SCATTER, Symbols.MID1, Symbols.WILD, Symbols.HIGH1, Symbols.COIN, Symbols.LOW1, Symbols.MID1, Symbols.SCATTER, Symbols.HIGH1, Symbols.WILD, Symbols.MID1, Symbols.LOW1, Symbols.COIN, Symbols.SCATTER, Symbols.HIGH1, Symbols.MID1, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.SCATTER, Symbols.MID1],
    [Symbols.SCATTER, Symbols.MID1, Symbols.WILD, Symbols.COIN, Symbols.HIGH1, Symbols.LOW1, Symbols.SCATTER, Symbols.HIGH1, Symbols.MID1, Symbols.COIN, Symbols.WILD, Symbols.LOW1, Symbols.HIGH1, Symbols.SCATTER, Symbols.MID1, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.MID1, Symbols.HIGH1, Symbols.SCATTER, Symbols.LOW1, Symbols.WILD, Symbols.COIN, Symbols.HIGH1, Symbols.MID1, Symbols.SCATTER, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.MID1, Symbols.SCATTER, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.SCATTER, Symbols.MID1, Symbols.HIGH1, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.SCATTER, Symbols.MID1, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.MID1],
    [Symbols.LOW1, Symbols.COIN, Symbols.SCATTER, Symbols.HIGH1, Symbols.WILD, Symbols.MID1, Symbols.LOW1, Symbols.HIGH1, Symbols.COIN, Symbols.SCATTER, Symbols.MID1, Symbols.WILD, Symbols.COIN, Symbols.LOW1, Symbols.HIGH1, Symbols.MID1, Symbols.SCATTER, Symbols.WILD, Symbols.HIGH1, Symbols.LOW1, Symbols.COIN, Symbols.MID1, Symbols.SCATTER, Symbols.WILD, Symbols.MID1, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.SCATTER, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.MID1, Symbols.SCATTER, Symbols.WILD, Symbols.COIN, Symbols.LOW1, Symbols.HIGH1, Symbols.MID1, Symbols.SCATTER, Symbols.WILD, Symbols.LOW1, Symbols.COIN, Symbols.HIGH1, Symbols.MID1, Symbols.SCATTER, Symbols.WILD, Symbols.LOW1, Symbols.COIN]
  ],

  coinValues: [1, 2, 5, 10, 20, 50, 100],
  coinWeights: [100, 50, 20, 10, 5, 2, 1],
  
  lineDefinitions: [
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
    [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
    [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
    [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
    [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
  ],
};
export const enum Symbols {
  HIGH1 = 0,
  HIGH2 = 1,
  HIGH3 = 2,
  MID1 = 3,
  MID2 = 4,
  MID3 = 5,
  LOW1 = 6,
  LOW2 = 7,
  LOW3 = 8,
  WILD = 9,
  SCATTER = 10,
  COIN = 11,
}

export interface GridPosition {
  x: number;
  y: number;
}

export interface GameResult {
  win: number;
  spins: SpinResult[];
}

export interface WinData {
  totalWin: number;
  Symnbol: Symbols;
  winningLines: winningLine[];
}

export interface winningLine {
  lineId: number;
  lineWinAmount: number;
  positions: GridPosition[];
}

export interface SpinResult {
  symbolMatrix: Symbols[][];
  winData: WinData;
  win: number;
  cumulativeWin: number;
}

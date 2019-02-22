import { isWinner, isBoardFull, getBoardFromActionLog, getEmptyBoard } from './logic';
import { PLAYER_1_SYMBOL as X, PLAYER_2_SYMBOL as O, EMPTY_CELL as _ } from './constants';

describe('isWinner', () => {
  it('should indicate no winning result', () => {
    const board = {
      0: [_, X, _],
      1: [O, _, O],
      2: [X, _, _],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeFalsy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: [X, X, X],
      1: [_, O, _],
      2: [_, _, O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeTruthy();
    expect(isOaWinner).toBeFalsy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: [_, _, O],
      1: [X, X, X],
      2: [_, _, O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeTruthy();
    expect(isOaWinner).toBeFalsy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: [_, O, _],
      1: [_, O, _],
      2: [X, X, X],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeTruthy();
    expect(isOaWinner).toBeFalsy();
  });

  it('should indicate O as a winner', () => {
    const board = {
      0: [O, X, X],
      1: [O, _, _],
      2: [O, _, X],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate O as a winner', () => {
    const board = {
      0: [_, O, X],
      1: [_, O, _],
      2: [X, O, X],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate O as a winner', () => {
    const board = {
      0: [_, X, O],
      1: [X, _, O],
      2: [X, _, O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate O as a winner', () => {
    const board = {
      0: [O, X, X],
      1: [_, O, _],
      2: [X, _, O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: [_, O, X],
      1: [_, X, _],
      2: [X, _, O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeTruthy();
    expect(isOaWinner).toBeFalsy();
  });
});

describe('isBoardFull', () => {
  it('should indicate that board is not full', () => {
    const board = {
      0: [_, O, X],
      1: [_, X, _],
      2: [X, _, O],
    };
    expect(isBoardFull(board)).toBeFalsy();
  });

  it('should indicate that board is full', () => {
    const board = {
      0: [X, O, X],
      1: [O, X, O],
      2: [X, X, O],
    };
    expect(isBoardFull(board)).toBeTruthy();
  });
});

describe('getEmptyBoard', () => {
  it('should form an empty board', () => {
    const expectedBoard = {
      0: [_, _, _],
      1: [_, _, _],
      2: [_, _, _],
    };
    expect(getEmptyBoard()).toEqual(expectedBoard);
  });
});

describe('getBoardFromActionLog', () => {
  it('should form the board based on action log entries', () => {
    const actionLog = [
      { player: X, row: '0', cell: '0' },
      { player: O, row: '2', cell: '2' },
      { player: X, row: '1', cell: '1' },
    ];
    const expectedBoard = {
      0: [X, _, _],
      1: [_, X, _],
      2: [_, _, O],
    };
    expect(getBoardFromActionLog(actionLog)).toEqual(expectedBoard);
  });

  it('should return empty board if more actions are present than available in the board', () => {
    const actionLog = [
      { player: X, row: '0', cell: '0' },
      { player: O, row: '2', cell: '2' },
      { player: X, row: '1', cell: '1' },
      { player: X, row: '1', cell: '1' },
      { player: X, row: '1', cell: '1' },
      { player: X, row: '1', cell: '1' },
      { player: X, row: '1', cell: '1' },
      { player: X, row: '1', cell: '1' },
      { player: X, row: '1', cell: '1' },
      { player: X, row: '1', cell: '1' },
    ];
    const expectedBoard = getEmptyBoard();
    expect(getBoardFromActionLog(actionLog)).toEqual(expectedBoard);
  });
});

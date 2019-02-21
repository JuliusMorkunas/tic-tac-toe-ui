import { isWinner, isBoardFull } from './logic';
import { PLAYER_1_SYMBOL as X, PLAYER_2_SYMBOL as O } from './constants';

describe('isWinner', () => {
  it('should indicate no winning result', () => {
    const board = {
      0: ['', X, ''],
      1: [O, '', O],
      2: [X, '', ''],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeFalsy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: [X, X, X],
      1: ['', O, ''],
      2: ['', '', O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeTruthy();
    expect(isOaWinner).toBeFalsy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: ['', '', O],
      1: [X, X, X],
      2: ['', '', O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeTruthy();
    expect(isOaWinner).toBeFalsy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: ['', O, ''],
      1: ['', O, ''],
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
      1: [O, '', ''],
      2: [O, '', X],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate O as a winner', () => {
    const board = {
      0: ['', O, X],
      1: ['', O, ''],
      2: [X, O, X],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate O as a winner', () => {
    const board = {
      0: ['', X, O],
      1: [X, '', O],
      2: [X, '', O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate O as a winner', () => {
    const board = {
      0: [O, X, X],
      1: ['', O, ''],
      2: [X, '', O],
    };
    const isXaWinner = isWinner({ player: X, board });
    const isOaWinner = isWinner({ player: O, board });
    expect(isXaWinner).toBeFalsy();
    expect(isOaWinner).toBeTruthy();
  });

  it('should indicate X as a winner', () => {
    const board = {
      0: ['', O, X],
      1: ['', X, ''],
      2: [X, '', O],
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
      0: ['', O, X],
      1: ['', X, ''],
      2: [X, '', O],
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

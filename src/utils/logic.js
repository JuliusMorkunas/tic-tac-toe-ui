import reduce from 'lodash/reduce';

const EMPTY_CELL = '';
const BOARD_CELLS_COUNT = 9;

const countInRow = (player, row) => row.filter(el => el === player).length;
const hasWonInRow = (player, row) => countInRow(player, row) === 3;

const countInColumn = (player, colNumber, ...rows) =>
  rows.map(row => row[colNumber]).filter(el => el === player).length;
const hasWonInColumn = (player, colNumber, ...rows) =>
  countInColumn(player, colNumber, ...rows) === 3;

const countInLeftSlant = (player, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[0], row1[1], row2[2]].filter(el => el === player).length;
};
const hasWonInLeftSlant = (player, ...rows) => countInLeftSlant(player, ...rows) === 3;

const countInRightSlant = (player, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[2], row1[1], row2[0]].filter(el => el === player).length;
};
const hasWonInRightSlant = (player, ...rows) => countInRightSlant(player, ...rows) === 3;

export const isWinner = ({ board, player }) => {
  const rows = Object.keys(board).map(row => board[row]);
  return !!(
    hasWonInRow(player, board[0]) ||
    hasWonInRow(player, board[1]) ||
    hasWonInRow(player, board[2]) ||
    hasWonInColumn(player, 0, ...rows) ||
    hasWonInColumn(player, 1, ...rows) ||
    hasWonInColumn(player, 2, ...rows) ||
    hasWonInLeftSlant(player, ...rows) ||
    hasWonInRightSlant(player, ...rows)
  );
};

export const isBoardFull = board => {
  const movesCount = reduce(
    board,
    (length, row) => {
      length += row.filter(cell => !!cell).length;
      return length;
    },
    0,
  );
  return movesCount === BOARD_CELLS_COUNT;
};

export const getEmptyBoard = () => {
  return {
    0: [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
    1: [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
    2: [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
  };
};

export const getBoardFromActionLog = actions => {
  const emptyBoard = getEmptyBoard();
  if (!actions || actions >= BOARD_CELLS_COUNT) {
    return emptyBoard;
  }
  return reduce(
    actions,
    (board, { player, row, cell }) => {
      board[row][cell] = player;
      return board;
    },
    emptyBoard,
  );
};

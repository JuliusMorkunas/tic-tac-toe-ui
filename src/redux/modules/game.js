import cloneDeep from 'lodash/cloneDeep';
import { getEmptyBoard, isWinner, isBoardFull, getBoardFromActionLog } from '../../utils/logic';
import api from '../../utils/api';
import { PLAYER_1_SYMBOL, PLAYER_2_SYMBOL } from '../../utils/constants';

// Actions
const PLAYER_ACTION = 'ttt/game/PLAYER_ACTION';
const RESET_GAME = 'ttt/game/RESET_GAME';
const RESET_GAME_SUCCESS = 'ttt/game/RESET_GAME_SUCCESS';
const RESET_GAME_FAILURE = 'ttt/game/RESET_GAME_FAILURE';
const GET_ACTIONS = 'ttt/game/GET_ACTIONS';
const GET_ACTIONS_SUCCESS = 'ttt/game/GET_ACTIONS_SUCCESS';
const GET_ACTIONS_FAILURE = 'ttt/game/GET_ACTIONS_FAILURE';
const LOG_ACTION = 'ttt/game/LOG_ACTION';
const LOG_ACTION_SUCCESS = 'ttt/game/LOG_ACTION_SUCCESS';
const LOG_ACTION_FAILURE = 'ttt/game/LOG_ACTION_FAILURE';

export const initialState = {
  board: getEmptyBoard(),
  turn: PLAYER_1_SYMBOL,
  winner: null,
  draw: false,
  actions: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLAYER_ACTION:
    case GET_ACTIONS_SUCCESS: {
      const { board, turn, winner, draw, actions } = action;
      return {
        ...state,
        board,
        turn,
        winner,
        draw,
        actions,
      };
    }
    case RESET_GAME:
      return initialState;
    case LOG_ACTION:
    case GET_ACTIONS:
    case GET_ACTIONS_FAILURE:
    case RESET_GAME_SUCCESS:
    case RESET_GAME_FAILURE:
    default:
      return state;
  }
}

// Action Creators
export const playerAction = ({ player, row, cell }) => (dispatch, getState) => {
  const timestamp = +new Date();
  const action = { player, row, cell, timestamp };
  const {
    game: { board, actions },
  } = getState();
  const nextBoard = cloneDeep(board);
  nextBoard[row][cell] = player;
  const winner = isWinner({ board: nextBoard, player }) ? player : null;
  dispatch({
    type: PLAYER_ACTION,
    board: nextBoard,
    winner,
    turn: player === PLAYER_1_SYMBOL ? PLAYER_2_SYMBOL : PLAYER_1_SYMBOL,
    actions: [...actions, action],
    draw: isBoardFull(nextBoard) && !winner,
  });
  dispatch({
    type: LOG_ACTION,
  });
  if (api.logAction(action).length) {
    dispatch({
      type: LOG_ACTION_SUCCESS,
    });
  } else {
    dispatch({
      type: LOG_ACTION_FAILURE,
    });
  }
};

export const getGameActions = () => dispatch => {
  dispatch({
    type: GET_ACTIONS,
  });
  const actions = api.getGameActions();
  const lastAction = actions.length ? actions[actions.length - 1] : {};
  const { player } = lastAction;
  const board = getBoardFromActionLog(actions);
  const winner = player && isWinner({ board, player }) ? player : null;
  const turn = player === PLAYER_1_SYMBOL ? PLAYER_2_SYMBOL : PLAYER_1_SYMBOL;
  dispatch({
    type: GET_ACTIONS_SUCCESS,
    board,
    turn,
    winner,
    draw: isBoardFull(board) && !winner,
    actions,
  });
};

export const resetGame = () => dispatch => {
  dispatch({
    type: RESET_GAME,
  });
  if (api.resetGame()) {
    dispatch({
      type: RESET_GAME_SUCCESS,
    });
  } else {
    dispatch({
      type: RESET_GAME_FAILURE,
    });
  }
};

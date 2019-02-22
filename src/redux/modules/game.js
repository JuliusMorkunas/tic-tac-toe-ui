import cloneDeep from 'lodash/cloneDeep';
import { getEmptyBoard, isWinner, isBoardFull, getBoardFromActionLog } from '../../utils/logic';
import api from '../../utils/api';
import { PLAYER_1_SYMBOL, PLAYER_2_SYMBOL } from '../../utils/constants';

// Actions
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
  isLoaded: false,
  board: getEmptyBoard(),
  turn: PLAYER_1_SYMBOL,
  winner: null,
  draw: false,
  actions: [],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_ACTION_SUCCESS:
    case GET_ACTIONS_SUCCESS: {
      const { board, turn, winner, draw, actions, isLoaded = true } = action;
      return {
        ...state,
        board,
        turn,
        winner,
        draw,
        actions,
        isLoaded,
      };
    }
    case RESET_GAME_SUCCESS:
      return {
        ...initialState,
        isLoaded: true,
      };
    case LOG_ACTION:
    case LOG_ACTION_FAILURE:
    case GET_ACTIONS:
    case GET_ACTIONS_FAILURE:
    case RESET_GAME:
    case RESET_GAME_FAILURE:
    default:
      return state;
  }
}

// Action Creators
export const playerAction = ({ player, row, cell }) => async (dispatch, getState) => {
  dispatch({
    type: LOG_ACTION,
  });
  const timestamp = +new Date();
  const action = { player, row, cell, timestamp };
  const isActionLogged = await api.logAction(action);
  if (isActionLogged) {
    const {
      game: { board, actions },
    } = getState();
    const nextBoard = cloneDeep(board);
    nextBoard[row][cell] = player;
    const winner = isWinner({ board: nextBoard, player }) ? player : null;
    dispatch({
      type: LOG_ACTION_SUCCESS,
      board: nextBoard,
      winner,
      turn: player === PLAYER_1_SYMBOL ? PLAYER_2_SYMBOL : PLAYER_1_SYMBOL,
      actions: [...actions, action],
      draw: isBoardFull(nextBoard) && !winner,
    });
  } else {
    dispatch({
      type: LOG_ACTION_FAILURE,
    });
  }
};

export const getGameActions = () => async dispatch => {
  dispatch({
    type: GET_ACTIONS,
  });
  const actions = await api.getGameActions();
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
    isLoaded: true,
  });
};

export const resetGame = () => async dispatch => {
  dispatch({
    type: RESET_GAME,
  });
  const isResetSuccessful = await api.resetGame();
  if (isResetSuccessful) {
    dispatch({
      type: RESET_GAME_SUCCESS,
    });
  } else {
    dispatch({
      type: RESET_GAME_FAILURE,
    });
  }
};

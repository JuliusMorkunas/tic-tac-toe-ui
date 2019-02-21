import { STORAGE_KEY, BOARD_CELLS_COUNT } from './constants';

const logAction = action => {
  const currentGameActionsString = localStorage.getItem(STORAGE_KEY);
  try {
    const currentGameActions = currentGameActionsString ? JSON.parse(currentGameActionsString) : [];
    const nextGameActions = Array.isArray(currentGameActions)
      ? [...currentGameActions, action]
      : [action];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextGameActions));
    return nextGameActions;
  } catch {
    return [];
  }
};

const resetGame = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  return true;
};

const getGameActions = () => {
  const currentGameActionsString = localStorage.getItem(STORAGE_KEY);
  try {
    const currentGameActions = currentGameActionsString ? JSON.parse(currentGameActionsString) : [];
    if (Array.isArray(currentGameActions) && currentGameActions.length > BOARD_CELLS_COUNT) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      return [];
    }
    return currentGameActions;
  } catch {
    return [];
  }
};

export default {
  logAction,
  resetGame,
  getGameActions,
};

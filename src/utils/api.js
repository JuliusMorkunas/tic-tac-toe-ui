import { API_URL } from './constants';
import ls from './localStorage';

// TODO: Connect API service

const logAction = action => {
  return !API_URL && ls.logAction(action);
};

const resetGame = () => {
  !API_URL && ls.resetGame();
  return true;
};

const getGameActions = () => {
  return !API_URL && ls.getGameActions();
};

export default {
  logAction,
  resetGame,
  getGameActions,
};

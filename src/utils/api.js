import { API_URL } from './constants';
import ls from './localStorage';

const validateResponse = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const readResponseAsJSON = response => {
  return response.json();
};

const logAction = async action => {
  const actions = ls.logAction(action);
  if (API_URL) {
    try {
      return await fetch(API_URL + '/api/actions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action),
      })
        .then(validateResponse)
        .then(readResponseAsJSON);
    } catch {
      // Fallback to localStorage
      return actions;
    }
  }
  return actions;
};

const resetGame = async () => {
  ls.resetGame();
  if (API_URL) {
    try {
      const actions = await fetch(API_URL + '/api/actions', { method: 'DELETE' })
        .then(validateResponse)
        .then(readResponseAsJSON);
      return !actions.length;
    } catch {
      // Fallback to localStorage
      return true;
    }
  }
  return true;
};

const getGameActions = async () => {
  if (API_URL) {
    try {
      return await fetch(API_URL + '/api/actions')
        .then(validateResponse)
        .then(readResponseAsJSON);
    } catch {
      // Fallback to localStorage
      return ls.getGameActions();
    }
  }
  return ls.getGameActions();
};

export default {
  logAction,
  resetGame,
  getGameActions,
};

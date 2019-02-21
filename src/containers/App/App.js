import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { playerAction, resetGame, getGameActions } from '../../redux/modules/game';
import s from './App.module.scss';
import Message from '../../components/Message';

const Game = lazy(() => import('../../components/Game'));

export const App = ({
  board,
  turn,
  winner = null,
  draw = false,
  actions = [],
  playerAction,
  resetGame,
  getGameActions,
}) => {
  useEffect(() => {
    if (typeof getGameActions === 'function') {
      getGameActions();
    }
  }, []);

  return (
    <div className={s.App}>
      <Suspense fallback={<Message message="Getting ready..." />}>
        <Game
          board={board}
          turn={turn}
          winner={winner}
          draw={draw}
          actions={actions}
          playerAction={playerAction}
          resetGame={resetGame}
        />
      </Suspense>
    </div>
  );
};

const ConnectedApp = connect(
  ({ game }) => ({
    board: game.board,
    turn: game.turn,
    winner: game.winner,
    draw: game.draw,
    actions: game.actions,
  }),
  { playerAction, resetGame, getGameActions },
)(App);

export default ConnectedApp;

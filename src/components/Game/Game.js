import React from 'react';
import s from './Game.module.scss';
import Message from '../Message';
import Reset from '../Reset';
import Board from '../Board';
import ActionLog from '../ActionLog';

const Game = ({ isLoaded, board, turn, winner, draw, actions = [], playerAction, resetGame }) => {
  const handlePlayerAction = ({ row, cell }) => {
    !board[row][cell] && !winner && playerAction({ player: turn, row, cell });
  };

  const handleGameReset = e => {
    e.preventDefault();
    resetGame();
  };

  return (
    <div className={s.Game}>
      {winner && (
        <>
          <Message message="Winner winner, chicken dinner!" />
          <Reset message="Again!" onClick={handleGameReset} />
        </>
      )}
      {draw && (
        <>
          <Message message="It's a draw. :(" />
          <Reset message="Try again..." onClick={handleGameReset} />
        </>
      )}
      {!draw && !winner && (
        <>
          <Message message={`Turn: ${turn}`} />
          <Reset message="Restart." disabled={!actions.length} onClick={handleGameReset} />
        </>
      )}
      <Board board={board} winner={winner} handlePlayerAction={handlePlayerAction} />
      <ActionLog actions={actions} />
    </div>
  );
};

export default Game;

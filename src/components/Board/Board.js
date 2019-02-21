import React from 'react';
import map from 'lodash/map';
import s from './Board.module.scss';

const Board = ({ board = {}, winner, handlePlayerAction }) => {
  return (
    <div className={s.Board}>
      {map(board, (row, i) => (
        <div key={i} className={s.Row}>
          {row.map((cell, j) => (
            <div
              key={j}
              className={`${s.Cell} ${winner && winner === cell && s.Winner}`}
              onClick={() => handlePlayerAction({ row: Number(i), cell: j })}
            >
              <span>{cell}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

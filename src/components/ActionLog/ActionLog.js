import React from 'react';
import s from './ActionLog.module.scss';

const ActionLog = ({ actions = [] }) => {
  return (
    !!actions.length && (
      <ul className={s.ActionsLog}>
        {actions.map(({ timestamp, player, row, cell }, i) => (
          <li key={i}>
            <span className={s.Time}>{new Date(timestamp).toLocaleTimeString()}:</span>{' '}
            <span>
              {player} marked {row + 1},{cell + 1}
            </span>
          </li>
        ))}
      </ul>
    )
  );
};

export default ActionLog;

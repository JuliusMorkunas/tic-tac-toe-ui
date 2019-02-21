import React from 'react';
import s from './Reset.module.scss';

const Reset = ({ onClick, message, disabled }) => {
  return (
    <div role="button" className={`${s.Restart} ${disabled ? s.IsDisabled : ''}`} onClick={onClick}>
      {message}
    </div>
  );
};

export default Reset;

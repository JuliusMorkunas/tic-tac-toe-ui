import React from 'react';
import s from './Message.module.scss';

const Message = ({ message }) => {
  return <p className={s.Message}>{message}</p>;
};

export default Message;

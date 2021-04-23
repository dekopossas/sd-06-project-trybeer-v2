import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TopMenu } from '../components';
import TrybeerContext from '../context/TrybeerContext';
import { verifyToken } from '../utils/verifications';
import { post } from '../api/fetchFunctions';

import socket from '../utils/socketClient';

const dateFormat = require('dateformat');

function Chat({ history }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const { user } = useContext(TrybeerContext);
  const [messageHistory, setMessageHistory] = useState([]);

  const fetchMessages = async () => {
    const allMessages = await verifyToken('chat', user, history);
    setMessageHistory(allMessages);
  };

  const onChangeMessage = ({ target: { value } }) => {
    setCurrentMessage(value);
  };

  const handleSubmit = async () => {
    const date = new Date();
    await post('chat', { email: user.email, message: currentMessage });
    if (messageHistory.length) {
      setMessageHistory([...messageHistory, {message: currentMessage, user}]);
    } else {
      setMessageHistory([{message: currentMessage, user}])
    }
    setCurrentMessage('');
    // fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, [setCurrentMessage]);
  return (
    <div>
      <TopMenu />
      <br />
      <br />
      <h1>CHAT</h1>
      <ul>
        {messageHistory.length && messageHistory.map(({ message, date }, index) => (
          <li key={ index }>
            <div data-testid="nickname">{user.email} - <span data-testid="message-time"> {dateFormat(date, 'HH:MM')} </span> </div> 
            <div data-testid="text-message">{message}</div>
          </li>
        ))}
      </ul>
      <input
        data-testid="message-input"
        type="text"
        name="message"
        placeholder="Digite aqui"
        id="message"
        onChange={ onChangeMessage }
        value={currentMessage}
      />
      <button
        data-testid="send-message"
        type="submit"
        onClick={ handleSubmit }
      >
        Enviar
      </button>
    </div>
  );
}

Chat.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Chat;

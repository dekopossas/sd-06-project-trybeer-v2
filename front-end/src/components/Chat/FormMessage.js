import React, { useState } from 'react';
import socket from '../../utils/socketClient';

function FormMessage() {
  const [message, setMessage] = useState('');

  const handleSend = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const nickname = user.email;
    console.log(`${nickname} enviou ${message}`);
    socket.emit('chat.sendMessage', { message, nickname });
    setMessage('');
  }

  return (
    <form onSubmit={ handleSend }>
      <div>
        <input
          data-testid="message-input"
          type="text"
          id="message-input"
          data-testid="message-input"
          placeholder="Digite uma mensagem..."
          onChange={(event) => setMessage(event.target.value)}
          value={ message }
        />
        <button
          type="submit"
          data-testid="send-message"
        >Enviar</button>
      </div>
    </form>
  );
}

export default FormMessage;

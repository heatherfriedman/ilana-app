import React, { useState } from 'react';
import styled from 'styled-components';
import { Messages } from './Messages';

const MessageBox = styled.div`
  border: dotted;
  width: 300px;
  height: 300px;
  background-color: wheat;
  margin: 10px;
`;

export const Home = ({ socket }) => {
  const [chat, setChat] = useState('');

  const createMessage = e => {
    setChat(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('chat message', chat);
    return false;
  };

  return (
    <>
      <div>Ilana's App</div>
      <MessageBox>
        <Messages socket={socket} />
      </MessageBox>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={createMessage}></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

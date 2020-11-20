import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useChat } from './useChat';

const MessageBox = styled.div`
  border: dotted;
  width: 300px;
  height: 300px;
  background-color: wheat;
  margin: 10px;
`;

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SendButton = styled.button`
  background-color: white;
  border: solid;
  margin: 5px;

  &:hover {
    background-color: green;
    color: white;
  }
`;

export const ChatRoom = props => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = event => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);

    setNewMessage('');
  };
  return (
    <>
      <div>Ilana's App</div>
      <div>Room: {roomId}</div>
      <MessageBox>
        {messages.map((message, i) => {
          <div key={i}>{message.body}</div>;
        })}
      </MessageBox>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write a message"
      />
      <SendButton onClick={handleSendMessage}>Send</SendButton>
    </>
  );
};

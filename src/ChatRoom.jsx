import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useChat } from './useChat';
import { Message } from './Message';

const MessageBox = styled.div`
  border: dotted;
  width: 300px;
  height: 300px;
  background-color: wheat;
  margin: 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  overscroll-behavior-y: contain;
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
  const { roomId, name } = props.match.params;
  const { messages, sendMessage } = useChat(roomId, name);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = event => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  useEffect(() => {
    console.log('the messages:', messages);
  }, [messages]);

  const singleMessage = messages.map((message, i) => <Message key={i} message={message} />);

  return (
    <>
      <div>Ilana's App</div>
      <div>Welcome {name}!</div>
      <div>
        You are in the <strong>{roomId}</strong> room
      </div>
      <MessageBox>{singleMessage}</MessageBox>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write a message"
      />
      <SendButton onClick={handleSendMessage}>Send</SendButton>
    </>
  );
};

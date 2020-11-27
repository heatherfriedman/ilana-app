import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useChat } from './useChat';
import { Message } from './Message';
import { User } from './User';

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

const SideBar = styled.div`
  display: flex;
  align-items: center;
`;

const SideBox = styled.div`
  height: 300px;
  width: 100px;
  background-color: red;
`;

const MessageText = styled.textarea`
  min-height: 3em;
`;

export const ChatRoom = props => {
  const { roomId, name } = props.match.params;
  const { messages, sendMessage, users } = useChat(roomId, name);
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
    console.log('the users', users);
  }, [messages, users]);

  const singleMessage = messages.map((message, i) => (
    <Message key={i} ownedByCurrentUser={message.ownedByCurrentUser} message={message} />
  ));

  const usersInRoom = users.map((user, i) => {
    <User key={`user${i}`} user={user} />;
  });

  return (
    <>
      <div>Ilana's App</div>
      <div>Welcome {name}!</div>
      <div>
        You are in the <strong>{roomId}</strong> room
      </div>
      <SideBar>
        <MessageBox>{singleMessage}</MessageBox>
        <SideBox>Users In Room: {usersInRoom}</SideBox>
      </SideBar>
      <MessageText
        type="text"
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write a message"
      />
      <div>Click on "send message" button below to send your message!</div>
      <SendButton onClick={handleSendMessage}>Send Message</SendButton>
    </>
  );
};

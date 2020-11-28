import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useChat } from './useChat';
import { Message } from './Message';
import { User } from './User';
import { PlumButton } from './Styles';

const MessageBox = styled.div`
  border: double;
  width: 300px;
  height: 300px;
  background-color: plum;
  margin: 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  overscroll-behavior-y: contain;
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
  margin-bottom: 5px;
`;

const Title = styled.h1`
  line-height: 1px;
  padding-top: 80px;
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
      <Title>Senior Chat</Title>
      <div>
        Welcome <i>{name}</i>!
      </div>
      <div>
        You are in the{' '}
        <i>
          <u>{roomId}</u>
        </i>{' '}
        room
      </div>

      <SideBar>
        <MessageBox>{singleMessage}</MessageBox>
        {/* <SideBox>Users In Room: {usersInRoom}</SideBox> */}
      </SideBar>
      <MessageText
        type="text"
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write a message"
      />
      <PlumButton onClick={handleSendMessage}>Send Message</PlumButton>
    </>
  );
};

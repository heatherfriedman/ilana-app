import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useChat } from './useChat';
import { Message } from './Message';
import { User } from './User';
import { PlumButton } from './Styles';

const MessageBox = styled.div`
  border: double;
  width: 300px;
  height: 200px;
  background-color: plum;
  margin: 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  overscroll-behavior-y: contain;
`;

const ViewMessages = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MessageText = styled.textarea`
  min-height: 3em;
  margin-bottom: 5px;
  width: 300px;
`;

const Title = styled.h1`
  padding-top: 80px;
  font-size: 24px;
  margin: 0;
`;

const Name = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Room = styled.h3`
  font-size: 15px;
  margin: 0;
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

  // useEffect(() => {
  //   console.log('the messages:', messages);
  //   console.log('the users', users);
  // }, [messages, users]);

  const singleMessage = messages.map((message, i) => (
    <Message key={i} ownedByCurrentUser={message.ownedByCurrentUser} message={message} />
  ));

  const usersInRoom = users.map((user, i) => {
    <User key={`user${i}`} user={user} />;
  });

  return (
    <>
      <Header>
        <Title>Senior Chat</Title>
        <Name>
          Welcome <i>{name}</i>!
        </Name>
        <Room>
          You are in the <u>{roomId}</u> room
        </Room>
      </Header>
      <Main>
        <ViewMessages>
          <MessageBox>{singleMessage}</MessageBox>
          {/* <SideBox>Users In Room: {usersInRoom}</SideBox> */}
        </ViewMessages>
        <MessageText
          aria-label="write a message"
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write a message"
        />
        <PlumButton onClick={handleSendMessage}>Send Message</PlumButton>
      </Main>
    </>
  );
};

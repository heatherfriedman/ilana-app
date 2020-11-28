import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { BlueButtonInput } from './Styles';

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1px;
  box-shadow: 2px 5px 20px 3px rgba(0, 0, 0, 0.54);
  padding: 20px;
  background-color: plum;
`;

const NameInput = styled.input`
  font-size: 1em;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;
  margin-left: 5px;
`;

const RoomDropDown = styled.select`
  font-size: 1em;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;
  margin-left: 5px;
`;

const Title = styled.h1``;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Home = () => {
  const [roomName, setRoomName] = useState('');
  const [name, setName] = useState('');
  const [nameFlag, setNameFlag] = useState(false);
  const [roomFlag, setRoomFlag] = useState(false);

  const history = useHistory();

  const handleRoomNameChange = event => {
    setRoomName(event.target.value);
    setRoomFlag(false);
  };

  const handleNameChange = event => {
    setName(event.target.value);
    setNameFlag(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      setNameFlag(true);
    }
    if (roomName === '') {
      setRoomFlag(true);
    }
    if (name !== '' && roomName !== '') {
      history.push(`/${name}/${roomName}`);
    }
  };

  return (
    <Main>
      <Title>Senior Chat</Title>
      <SignInForm onSubmit={handleSubmit}>
        <label>
          Type in your name:
          <NameInput type="text" placeholder="name" onChange={handleNameChange}></NameInput>
        </label>
        <label>
          Choose a room:
          <RoomDropDown onChange={handleRoomNameChange}>
            <option>Choose a room</option>
            <option value="Language Exchange">Language Exchange</option>
            <option value="Recipe Exchange"> Recipe Exchange</option>
            <option value="Book Club">Book Club</option>
          </RoomDropDown>
        </label>
        <BlueButtonInput type="submit" value="join room" />
        {nameFlag && <div>Please input name</div>}
        {roomFlag && <div>Please select a room</div>}
      </SignInForm>
    </Main>
  );
};

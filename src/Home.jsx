import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { BlueButtonInput } from './Styles';

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: dotted;
  padding: 20px;
`;

const HomeInput = styled.input`
  font-size: 1em;
`;

const StyledDropDown = styled.select`
  font-size: 1em;
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
    <>
      <div>Senior Chat</div>
      <SignInForm onSubmit={handleSubmit}>
        <label>
          Type in your name:
          <HomeInput type="text" placeholder="name" onChange={handleNameChange}></HomeInput>
        </label>
        <label>
          Choose a room:
          <StyledDropDown onChange={handleRoomNameChange}>
            <option>Choose a room</option>
            <option value="Language Exchange">Language Exchange</option>
            <option value="Recipe Exchange"> Recipe Exchange</option>
            <option value="Book Club">Book Club</option>
          </StyledDropDown>
        </label>
        <BlueButtonInput type="submit" value="join room" />
        {nameFlag && <div>Please input name</div>}
        {roomFlag && <div>Please select a room</div>}
      </SignInForm>
    </>
  );
};

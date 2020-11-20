import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  const JoinRoomButton = styled.input``;

  return (
    <>
      <div>Ilana's App</div>
      <SignInForm onSubmit={handleSubmit}>
        <label>Type in your name:</label>
        <input type="text" placeholder="name" onChange={handleNameChange}></input>
        <div>Choose a room:</div>
        <select onChange={handleRoomNameChange}>
          <option>Choose a room</option>
          <option value="Language Exchange">Language Exchange</option>
          <option value="Recipe Exchange"> Recipe Exchange</option>
          <option value="Book Club">Book Club</option>
        </select>
        <JoinRoomButton type="submit" value="join room" />
        {nameFlag && <div>Please input name</div>}
        {roomFlag && <div>Please select a room</div>}
      </SignInForm>
    </>
  );
};

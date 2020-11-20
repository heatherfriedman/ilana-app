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
  const history = useHistory();

  const handleRoomNameChange = event => {
    setRoomName(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/${name}/${roomName}`);
  };

  const JoinRoomButton = styled.input``;

  return (
    <>
      <div>Ilana's App</div>
      <SignInForm onSubmit={handleSubmit}>
        <label>What is your name?</label>
        <input type="text" placeholder="name" onChange={handleNameChange}></input>
        <select onChange={handleRoomNameChange}>
          <option>Choose a Room</option>
          <option value="Language Exchange">Language Exchange</option>
          <option value="Recipe Exchange"> Recipe Exchange</option>
          <option value="Book Club">Book Club</option>
        </select>
        <JoinRoomButton type="submit" value="join room" />
      </SignInForm>
    </>
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const [roomName, setRoomName] = useState('');
  const history = useHistory();

  const handleRoomNameChange = event => {
    setRoomName(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/${roomName}`);
  };

  const JoinRoomButton = styled.input``;

  return (
    <>
      <div>Ilana's App</div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a room:
          <select onChange={handleRoomNameChange}>
            <option value="Language Exchange">Language Exchange</option>
            <option value="Recipe Exchange"> Recipe Exchange</option>
            <option value="Book Club">Book Club</option>
          </select>
        </label>
        <JoinRoomButton type="submit" value="join room" />
      </form>
    </>
  );
};

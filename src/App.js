import React from 'react';
import { Home } from './Home';
import io from 'socket.io-client';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
  const socket = io.connect('https://ilana-app.herokuapp.com/');
  // const socket = io.connect('http://localhost:3001/');

  return (
    <>
      <GlobalStyle />
      <Home socket={socket} />
    </>
  );
}

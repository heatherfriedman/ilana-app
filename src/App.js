import React from 'react';
import { Home } from './Home';
import io from 'socket.io-client';
import { GlobalStyle } from './GlobalStyle';
import { Switch, Route } from 'react-router-dom';
import { Login } from './Login';

export default function App() {
  const socket = io.connect('https://ilana-app.herokuapp.com/');
  // const socket = io.connect('http://localhost:3001/');

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home socket={socket} />
        </Route>
      </Switch>
    </>
  );
}

import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const NameForm = styled.form``;

export const Login = () => {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/home');
  };

  return (
    <NameForm onSubmit={handleSubmit}>
      <div>What is Your Name?</div>
      <input placeholder="input name"></input>
      <input type="submit" value="Go!"></input>
    </NameForm>
  );
};

import React from 'react';
import styled from 'styled-components';

const MessageLine = styled.div`
  background: ${props => (props.$ownedByCurrentUser ? 'white' : 'lightgrey')};
  padding: 5px;
  text-align: ${props => (props.$ownedByCurrentUser ? 'left' : 'right')};

  &:hover {
    opacity: 0.6;
  }
`;
const Name = styled.span`
  color: #070e34;
  white-space: pre-wrap;
  font-size: 10px;
  vertical-align: super;
`;

export const Message = props => {
  return (
    <MessageLine $ownedByCurrentUser={props.ownedByCurrentUser}>
      <Name>{props.message.name}: </Name>
      {props.message.body}
    </MessageLine>
  );
};

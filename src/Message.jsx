import React from 'react';
import styled from 'styled-components';

const MessageLine = styled.div`
  border: solid;
  border-radius: 8px;
  background-color: white;
`;

export const Message = props => {
  return (
    <MessageLine>
      <strong>{props.message.name}:</strong> {props.message.body}
    </MessageLine>
  );
};

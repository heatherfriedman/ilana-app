import React, { useEffect, useState } from 'react';

export const Messages = ({ socket }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('chat message', chat => {
      console.log(('front end chat', chat));
      setMessage(chat);
    });
  }, []);

  return <div>{message}</div>;
};

import { useEffect, useRef, useState } from 'react';

import socketIOClient from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'; // Name of the event
// Uncomment out below for heroku deployment
const SOCKET_SERVER_URL = 'https://mind-the-gap.herokuapp.com/';

// Uncomment out below for local development
// const SOCKET_SERVER_URL = 'http://localhost:8080/';

export const useChat = (roomId, name) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();
  const [users, setUsers] = useState([]); // All users

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId, name },
    });

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, message => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages(messages => [...messages, incomingMessage]);
    });

    //Listens for new user
    socketRef.current.on('newJoin', newUser => {
      const newPerson = newUser;
      setUsers(users => [...users, newPerson]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = messageBody => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      name,
    });
  };

  return { messages, sendMessage, users };
};

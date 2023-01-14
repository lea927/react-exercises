import "./App.css";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import React, { useState } from 'react';


function User({ username }) {
  const [messages, setMessages] = useState([
    { username: "Franklin", text: "Hi, Michael!" },
    { username: "Franklin", text: "How are you?" },
    { username: "Michael", text: "Hi, Franklin! Good, you?" },
  ]);

  const createMessage = (message) => {
    message.username = username;
    setMessages([...messages, message])
  };
 return (
  <>
   <div className='chat-window'>
    <h2>Chat</h2>
    <div className='name sender'>{username}</div>
    <Messages messages={messages} username={username} />
    <SendMessage onAddMessage={createMessage}/>
   </div>
  </>
 );
}

export default User;

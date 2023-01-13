import "./App.css";
import Message from "./Message";

function Messages({ messages, username }) {
 return (
  <ul className='message-list'>
   {messages.map((message, index) => (
    <Message message={message} key={index} username={username} />
   ))}
  </ul>
 );
}

export default Messages;

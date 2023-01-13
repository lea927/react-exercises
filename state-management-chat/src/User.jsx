import "./App.css";
import Messages from "./Messages";

function User({ username, messages }) {
 return (
  <>
   <div className='chat-window'>
    <h2>Chat</h2>
    <div className='name sender'>{username}</div>
    <Messages messages={messages} username={username} />
   </div>
  </>
 );
}

export default User;

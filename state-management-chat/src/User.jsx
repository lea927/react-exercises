import "./App.css";
import Messages from "./Messages";

const messages = [
  { username: "Franklin", text: "Hi, Michael!" },
  { username: "Franklin", text: "How are you?" },
  { username: "Michael", text: "Hi, Franklin! Good, you?" },
 ];

const createMessage = (message) => {};

// If the user did not type anything, he/she should not be allowed to submit.
const isDisabled = () => {
  return false;
};

function User({ username }) {
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

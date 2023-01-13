import "./App.css";

function Message({message, username}) {
  return (
    <li
      className={
        message.username === username
        ? "message sender"
        : "message recipient"
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
   );
}

export default Message;
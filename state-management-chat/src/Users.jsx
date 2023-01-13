import "./App.css";
import User from "./User";

function Users({ users, messages }) {
 return (
  <>
   {users.map((user) => (
    <User username={user.username} messages={messages} />
   ))}
  </>
 );
}

export default Users;

import "./App.css";
import User from "./User";

function Users({ users }) {
 return (
  <>
   {users.map((user) => (
    <User
     username={user.username}
     key={user.username}
    />
   ))}
  </>
 );
}

export default Users;

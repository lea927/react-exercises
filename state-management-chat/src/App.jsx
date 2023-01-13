import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";

const users = [{ username: "Franklin" }, { username: "Michael" }];

const messages = [
  { username: "Franklin", text: "Hi, Michael!" },
  { username: "Franklin", text: "How are you?" },
  { username: "Michael", text: "Hi, Franklin! Good, you?" },
];

const App = () => {
  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = () => {
    return false;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Mini Chat Program Using Hooks</h1>
      </header>
      <div className="container">
          <Users users={users} messages={messages}/>
      </div>
    </div>
  );
};

export default App;

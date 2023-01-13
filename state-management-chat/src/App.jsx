import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";

const users = [{ username: "Franklin" }, { username: "Michael" }];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Mini Chat Program Using Hooks</h1>
      </header>
      <div className="container">
          <Users users={users}/>
      </div>
    </div>
  );
};

export default App;

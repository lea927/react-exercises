import "./App.css";

function SendMessage() {
  return (
    <div>
    <form className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your message..."
      />
      <div className="input-group-append">
        <button className="btn submit-button">
          SEND
        </button>
      </div>
    </form>
  </div>
  );
}

export default SendMessage;
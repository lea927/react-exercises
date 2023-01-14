import "./App.css";
import React, { useState } from "react";

function SendMessage({onAddMessage}) {
 const [message, setMessage] = useState({
  username: "",
  text: "",
 });

 const handleInputChange = (event) => {
  const { name, value } = event.target;
  setMessage({ ...message, [name]: value });
 };

 // If the user did not type anything, he/she should not be allowed to submit.
 const isDisabled = () => {
  return message.text === "";
 };

 const handleSubmit = (event) => {
  event.preventDefault();

  onAddMessage(message);
 };

 return (
  <div>
   <form className='input-group' onSubmit={handleSubmit}>
    <input
     type='text'
     className='form-control'
     placeholder='Enter your message...'
     name='text'
     onChange={handleInputChange}
    />
    <div className='input-group-append'>
     <button className='btn submit-button' disabled={isDisabled()}>SEND</button>
    </div>
   </form>
  </div>
 );
}

export default SendMessage;

import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
     <h1>Programming an instant messaging app</h1>

      <form action="submit">
        <input value={input} onChange={event => setInput(event.target.value)} type="text" />
        <button type='submit' onClick={sendMessage}>Send Message</button>
      </form>

    {
      messages.map((message) => (
        <p>{message}</p>
      ))
    }

     {/* actual messages */}
    </div>
  );
}

export default App;

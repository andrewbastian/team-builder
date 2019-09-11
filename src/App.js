import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';

function App() {
  const [team, setMember] = useState([])
  return (
    <div className="App">
      <header className="list"> Our Team: </header>
        <div>
        <Form />
        </div>
</div>
  );
}

export default App;

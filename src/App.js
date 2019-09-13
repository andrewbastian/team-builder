import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';

function App() {

  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <h1>Our Team:</h1>
      {team.map((person,index) => {
        console.log(person);
        return (
          <div className="team">
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.role}</p>


          </div>
        )
      })}
      <div className = "form">

        <h2>Join our team:</h2>

      <Form team={team} setTeam={setTeam}/>
      </div>
    </div>
  );

}
export default App;

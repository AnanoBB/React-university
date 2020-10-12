import React,{useState} from 'react';
import UserOutput from './UserOutput'
import UserInput from './UserInput'
import './App.css'


function App() {

  const [username, setName] = useState();

  const handleChange = (e) => setName(e.target.value);
 
  return (
    <div className="app">
      <UserOutput value = {username} />
      <UserInput onChange = {handleChange}/>
    </div>
  );
}


export default App;

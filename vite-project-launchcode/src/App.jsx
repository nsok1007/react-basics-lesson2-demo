import React from 'react';
import Greeting from './components/Greeting';
import EveningGreeting from './components/EveningGreeting';

const App = () => {
  const currentHour = new Date().getHours();
  const isMorning = currentHour < 12;
  const userNames=['Nik', 'Jonathan', 'Cthulhu', 'Minnie'];
  {/*const userName = 'Nik';*/}


  return(
    <div>
      {userNames.map((name)=> <Greeting key={name} name={name}/>)}
      {/* FOR SINGULAR NAME: isMorning? <Greeting name={userName}/>:<EveningGreeting name={userName}/> */}  
    </div>
  );
};

export default App

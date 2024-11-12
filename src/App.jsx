import './App.css'
import { useState } from 'react';
import CardTable from './components/MemoryGame'
import GetVillager from './components/Nookipedia'

function App() {
  let memory = [];
  const [table, setTable] = useState("");

  const cardChosen = (chosenName) => {
    if(memory.includes(chosenName)) {
      console.log("You lost");
    } else {
      memory.push(chosenName);
      //shuffle deck and re-render
      //subtract possibleCards
      //increase score
      console.log(memory);
    }
  };

  const shuffleDeck = () => {

  }

  return (
    <>
      <GetVillager/>
      <br/>
      <CardTable
        cardSelect={cardChosen}
      /> 
    </>
  )
}

export default App;

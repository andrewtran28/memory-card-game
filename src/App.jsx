import './App.css'
import { useState } from 'react';
import Card from './components/MemoryGame'
import GetVillager from './components/Nookipedia'

// let deck = ["1 Dog", "2 Cat", "3 Frog", "4 Bear"];

const numCards = 4; //Defines number of cards for game

const initializeDeck = () => {
  let deck = [];

  for (var i = 0; i < numCards; i++) {
    let villager = GetVillager();

    //Re-choose villager for index if deck already includes the chosen villager
    while (deck.includes(villager)) {
      villager = GetVillager();
    }
    deck.push(villager);
  }

  return deck;
}

const deck = initializeDeck();

function App() {
  const [list, setList] = useState(deck);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memory, setMemory] = useState([]);

  const shuffleDeck = (array) => {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  
  const handleCardClick = (chosenCard) => {
    if(memory.includes(chosenCard)) {
      console.log("You lost");

      setScore(0);
      setMemory([]);
    } else {
      setScore((score) => {
        var newScore = score + 1;
        if (newScore > highScore) {
          setHighScore(() => newScore);
        }
        return newScore;
      });

      setMemory(prevMemory => [...prevMemory, chosenCard]);
      if ((memory.length + 1) === deck.length) {
        console.log("You win");

        setScore(0);
        setMemory([]);
      }
    }

    const arrayCopy = list;
    shuffleDeck(deck);
    setList(() => arrayCopy);
  }

  return (
    <div>
      {deck.map((card) => {
        return (
          <Card
            name={card}
            key={card}
            handleCardClick={() => handleCardClick(card)}
          /> 
        );
      })}

      <p>Score: {score}</p>
      <p>Memory: {memory}</p>

      <p>High Score: {highScore}</p>
    </div>
  )
}

export default App;

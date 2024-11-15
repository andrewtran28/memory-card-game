import { useState, useEffect } from 'react';
import logoACNH from './assets/logoACNH.webp'
import getNookipediaData from './components/Nookipedia';
import Card from './components/Card';

let villagers = await getNookipediaData();

function App() {
  const [deck, setDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [difficulty, setDifficulty] = useState(6);
  var deckSize = difficulty;

  const initializeDeck = () => {
    GetVillagers()
      .then((deck) => {
          setDeck(deck);
      })
  }

  useEffect(() => {
    initializeDeck();
  },[]);

  const RandomNumber = () => {
    const VILLAGER_NUM = 488; //Total villagers in Animal Crossing Series
    return Math.floor(Math.random() * VILLAGER_NUM);
  }

  const GetVillagers = async () => { 
    let stack = [];
    let indexStack = [];

    for (var i = 0; i < deckSize; i++) {
        var index = RandomNumber();

        //Re-choose index if stack already has this number OR if villager does not appear in New Horizons
        while (indexStack.includes(index) || !villagers[index].appearances.includes("NH")) {
          index = RandomNumber();
        }

        let villager = {
          name: villagers[index].name,
          img: villagers[index].image_url,
        }  

        indexStack[i] = index;
        stack[i] = villager;
    }

    return stack;
  }

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
      resetGame();
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
        resetGame();
      }
    }

    shuffleDeck(deck);
  }

  const resetGame = (difficulty) => {
    if (difficulty < 4) {
      deckSize = 4;
      setDifficulty(4);
    } else if (difficulty > 20) {
      deckSize = 20;
      setDifficulty(20);
    }

    setScore(0);
    setMemory([]);
    initializeDeck();
  }

  const toggleName = () => {
    const cardClass = document.querySelectorAll(".card-name");
    let cardList = [...cardClass];
    cardList.forEach(card => card.classList.toggle('toggle-name'));
  }

  return (
    <div>
      <section className="header-cont">
        <div className="header">
          <img className="logo" src={logoACNH}/>
          <h1>Memory Game</h1>
        </div>

        <div className="difficulty">
          <label>Difficulty: </label>
          <input type="number" min="4" max="20" value={difficulty} onChange={e => setDifficulty(e.target.value)}/>
          <button id="btn-reset" onClick={() => resetGame(difficulty)}>Set</button>
          <button id="btn-toggle-name" onClick={() => toggleName()}>Toggle Names</button>
        </div>

        <div className="scoreboard">
        <span>High Score: {highScore}</span>
        <span>Score: {score}</span>
      </div>
      </section>

      <section className="cards-cont">
        {deck.map((card) => {
          return (
            <Card
              name={card.name}
              img={card.img}
              key={card.name}
              handleCardClick={() => handleCardClick(card.name)}
            /> 
          );
        })}    
      </section>
    </div>
  )
}

export default App;

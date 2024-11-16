import { useState, useEffect } from 'react';
import logoACNH from './assets/logoACNH.webp'
import getNookipediaData from './components/Nookipedia';
import Card from './components/Card';

function App() {
  const [deck, setDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [difficulty, setDifficulty] = useState(5);

  var deckSize = difficulty;
  const dialog = document.querySelector("dialog");
  const winMessage = document.getElementById('win-message');
  const btn_close = document.createElement('button');
  btn_close.id = "btn-close";
  btn_close.textContent = "Start New Game";

  btn_close.addEventListener('click', () => {
      dialog.close();
      resetGame();
  });

  const initializeDeck = async () => {
    let villagers = await getNookipediaData();
    GetVillagers(villagers)
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

  const GetVillagers = async (villagers) => { 
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
      winMessage.textContent = "You lose... Try not to choose a card twice.";
      winMessage.appendChild(btn_close);
      dialog.showModal();
      return;
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
        winMessage.textContent = "You win! All cards were only chosen once.";
        winMessage.appendChild(btn_close);
        dialog.showModal();
        return;
      }
    }

    shuffleDeck(deck);
  }

  const resetGame = () => {
    if (difficulty < 3) {
      deckSize = 3;
      setDifficulty(3);
    } else if (difficulty > 24) {
      deckSize = 24;
      setDifficulty(24);
    }

    setScore(0);
    setMemory([]);
    initializeDeck();
  }

  const toggleName = () => {
    const cardClass = document.querySelectorAll(".card-name");
    let cardList = [...cardClass];
    cardList.forEach(card => card.classList.toggle('hide-name'));
  }

  return (
    <div className="page-layout">
      <section className="header-cont">
        <div className="header">
          <img className="logo" src={logoACNH}/>
          <h1>Memory Game</h1>
        </div>

        <div>
          <div className="difficulty">
              <label>Cards: </label>
              <input type="number" min="3" max="24" value={difficulty} onChange={e => setDifficulty(e.target.value)}/>
              <button id="btn-set" onClick={() => {
                  setHighScore(0);
                  resetGame();
              }}>Set</button>
              <button id="btn-toggle-name" onClick={() => toggleName()}>Toggle Names</button>
            </div>

            <div className="scoreboard">
              <div className="score">
                <span>High Score: {highScore}</span>
                <span>Score: {score}</span>
              </div>
            <button id="btn-reset" onClick={() => resetGame()}>Reset Game</button>
          </div>
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

      <footer>
        <div><em>Memory Game</em> Project by <a href="https://github.com/andrewtran28/memory-card-game">minglee</a>; Assets provided by <a href="https://api.nookipedia.com/">Nookipedia API</a></div>
      </footer>

      <dialog>
        <div id="win-message"></div>
      </dialog>
    </div>
  )
}

export default App;

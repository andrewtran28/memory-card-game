import GetVillager from "./Nookipedia";


// function shuffleDeck(deck) {
//     let currentIndex = deck.length;

//     while (currentIndex != 0) {

//       let randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
//     }
// }

// function Card({deck, cardChosen}) {
//     const deckArray = deck.map((card) => {
//         const index = deck.indexOf(card);
//         return (
//             <div>
//                 <li key={index} data-key={index} className="card-list">
//                     <button className="btn-card" onClick={() => cardChosen(deck[index])}>{deck[index]}</button>
//                 </li>
//             </div>
//         )
//     });

//     return(
//         <div className="table">
//             <ul>{deckArray}</ul>
//         </div>
//     )
// }

function Card({ name, handleCardClick }) {
    return (
        <div className="card">
            <button onClick={handleCardClick}>{name}</button>
        </div>
    )
}

export default Card;
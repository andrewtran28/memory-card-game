import GetVillager from "./Nookipedia";

function setupDeck() {
    // let deck = ["A", "B", "C", "D"];

    let deck = [];
    for (var i = 0; i < 4; i++) {
        deck.push(GetVillager());
    }

    return deck;
}

function shuffleDeck(deck) {
    let currentIndex = deck.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }
}

function CardTable({cardSelect}) {
    let deck = setupDeck();
    shuffleDeck(deck);

    const deckArray = deck.map((card) => {
        const index = deck.indexOf(card);

        return (
            <div>
                <li key={index} data-key={index} className="card-list">
                    <button className="btn-card" onClick={() => cardSelect(deck[index])}>{deck[index]}</button>
                </li>
            </div>

        )
    })

    return(
        <div className="table">
            <ul>{deckArray}</ul>
        </div>
    )
}

// export default SetupDeck;
export default CardTable;
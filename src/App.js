import './App.css';
import Player from './Player';
import CardList from './CardList';
import ExecutePassButton from './ExecutePassButton';
import { useContextObj } from './ContextProvider';

function App() {
  const {
    cards, 
    selectedCard, 
    playerOneHand,
    playerTwoHand,
    playerThreeHand,
  } = useContextObj();

  
  // function findCardIndex(value, suit, cards) {
  //   return cards.findIndex(card => card.value === value && card.suit === suit);
  // }

  // function passCard(card) {
  //   const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
  //   const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

  //   // arrays start at zero, but our players start at 1 :shrug:
  //   const toHand = playerHands[to - 1] || cards;
  //   const fromHand = playerHands[from - 1] || cards;

  //   const toSetFunction = playerHandSetFunctions[to - 1] || setCards;
  //   const fromSetFunction = playerHandSetFunctions[from - 1] || setCards;

  //   const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
  //   const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

  //   toHand.push(cardToMove);

  //   toSetFunction([...toHand]);
  //   fromSetFunction([...fromHand]);

  //   setSelectedCard(null);
  // }

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player player={1} hand={playerOneHand} />
        <Player player={2} hand={playerTwoHand} />
        <Player player={3} hand={playerThreeHand} />
        <CardList cards={cards} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton />
        }
      </section>
    </div>
  );
}

export default App;
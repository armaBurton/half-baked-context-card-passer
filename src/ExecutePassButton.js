import React from 'react';
import Card from './Card';
import { useContextObj } from './ContextProvider';

export default function ExecutePassButton() {
  const {
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    selectedCard, setSelectedCard,
    cards, setCards,
    from,
    to, 
  } = useContextObj();

  function findCardIndex(value, suit, cards) {
    return cards.findIndex(card => card.value === value && card.suit === suit);
  }

  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

    // arrays start at zero, but our players start at 1 :shrug:
    const toHand = playerHands[to - 1] || cards;
    const fromHand = playerHands[from - 1] || cards;

    const toSetFunction = playerHandSetFunctions[to - 1] || setCards;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setCards;

    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

    toHand.push(cardToMove);

    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);

    setSelectedCard(null);
  }

  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} player='button'/> from {from} to {to}
    </div>
  );
}

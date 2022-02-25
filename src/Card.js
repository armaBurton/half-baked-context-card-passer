import React from 'react';
import { useContextObj } from './ContextProvider';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, player }) {
  const { 
    selectedCard, setSelectedCard,
    setFrom
  } = useContextObj();

  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }
  
  // if there IS a selected card, and it has the same value and suit as THIS card, style it differently
  const thisIsTheSelectedCard = player !== 'button' && selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;
  // const thisIsTheSelectedCard = selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;


  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} 
      onClick={player !== 'button' ? handleCardClick : () => {}}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}

import React from 'react';
import Card from './Card';
import { useContextObj } from './ContextProvider';

export default function CardList({ cards, player }) {
  const {
    selectedCard, setSelectedCard,
    setFrom
  } = useContextObj();
  
  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          setSelectedCard={setSelectedCard} 
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />))
      }
    </div>
  );
}

import React from 'react';
import CardList from './CardList';
import { useContextObj } from './ContextProvider';

export default function Player({ player, hand, }) {
  const {
    to, setTo, 
    setFrom,
    setSelectedCard, selectedCard
  } = useContextObj();

  return (
    <div className={`player ${to === player ? 'selected-player' : ''}`} onClick={() => setTo(player)}>
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard} />
      
    </div>
  );
}

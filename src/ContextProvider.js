
import { 
  useState, 
  createContext, 
  useContext 
} from 'react';
import deck from './cards-data';

const ContextObj = createContext();

export default function ContextProvider({ children }) {
  const [cards, setCards] = useState(deck);
  const [selectedCard, setSelectedCard] = useState();
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const objState = {
    cards, setCards,
    selectedCard, setSelectedCard,
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo,
  };
  
  return <ContextObj.Provider value={objState}>
    {children}
  </ContextObj.Provider>;
}

export function useContextObj(){
  return useContext(ContextObj); 
}


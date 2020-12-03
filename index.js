import './src/styles/index.sass';
import { renderInitialDeck } from './src/js/deck';
import { dragAndDrop } from './src/js/dragAndDrop';
import { sortCardsFromHand } from './src/js/sortCardsFromHand';
import { shuffle } from './src/js/shuffle';

renderInitialDeck();
dragAndDrop();
sortCardsFromHand();
shuffle();


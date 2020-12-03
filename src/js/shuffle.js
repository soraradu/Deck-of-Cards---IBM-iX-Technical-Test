import { renderDeck } from './deck'
import { dragAndDrop } from './dragAndDrop'

export const shuffle = e => {
    const shuffle = document.querySelector('.shuffle')
    shuffle.addEventListener('click', e => {
        const domCards = document.querySelectorAll('.show-full-deck .single-card');
        const domDeck = [];
        domCards.forEach( card => {
            const suit = card.getAttribute('data-card-suit');
            const value = card.getAttribute('data-card-value');
            domDeck.push({ suit: suit, value: value });
        })
        domDeck.sort(() => Math.random() - 0.5);
        document.querySelector('.show-full-deck').innerHTML = renderDeck(domDeck) ;
        dragAndDrop();
    })
}
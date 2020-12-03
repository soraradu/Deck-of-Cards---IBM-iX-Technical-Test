import { svg } from './svg'

export const createDeck = e => {

    const suits = ['clubs', 'spades', 'hearths', 'diamonds'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const deck = [];
    suits.forEach( ( suit, i ) => {    
        values.forEach( ( value, j ) => 
            deck.push( { suit: suit, value: value } ) 
        )
    })
    return deck;
    
}

export const renderDeck = deck => {
    const icons = svg();
    let allCardsHtml = '' ;
    deck.map( (card, index) => {
        const singleCard =/*html*/`
            <div class="single-card" draggable="true" data-card-suit="${card.suit}" data-card-value="${card.value}">
                <div class="suit">${ (icons ? icons[card.suit] : card.suit ) }</div>
                <p class="value">${card.value}</p>
            </div>
        `;
        allCardsHtml += singleCard;
    })
    return allCardsHtml;

}

export const renderInitialDeck = e => 
    document.querySelector('.show-full-deck').innerHTML = renderDeck(createDeck() );
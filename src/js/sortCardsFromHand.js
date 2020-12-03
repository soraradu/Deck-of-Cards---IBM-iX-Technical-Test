import { svg } from './svg'


export const sortCardsFromHand = e => {
    //Sort Cards from hand
    const icons = svg();
    const sortCardsFromHands = document.querySelector('.sort');
    sortCardsFromHands.addEventListener('click', e => {
        const slectedCards = [];
        document.querySelectorAll('.drawed-cards .single-card').forEach( card => {
            const suit = card.getAttribute('data-card-suit');
            const value = card.getAttribute('data-card-value');
            slectedCards.push({ suit: suit, value: value });
        })

        // Preparea sortig
        // Order selected cards, order: Clubs, Spades, Hearts, Diamonds
        const suitOrder = { 'clubs' : 1, 'spades' : 2, 'hearths' : 3, 'diamonds' : 4 };
        
        // Order selected cards by values
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const valueOrder = {};
        values.forEach( (value,index) => valueOrder[value] = index );
        
        slectedCards.sort( (a, b) =>  valueOrder[a.value] - valueOrder[b.value] );
        slectedCards.sort( (a, b) =>  suitOrder[a.suit] - suitOrder[b.suit] ) ;

        let slectedCardsHtml = '';
        slectedCards.forEach( card => {
            const singleCard =/*html*/`
                <div class="single-card" data-card-suit="${card.suit}" data-card-value="${card.value}" draggable="true">
                    <div class="suit">${ (icons ? icons[card.suit] : card.suit ) }</div>
                    <p class="value">${card.value}</p>
                </div>
            `;
            slectedCardsHtml += singleCard;
        })
        document.querySelector('.drawed-cards .card-container').innerHTML = slectedCardsHtml;
    })

}
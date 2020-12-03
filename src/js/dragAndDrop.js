export const dragAndDrop = e => {
    // Single Card Drag Event

    const cards = document.querySelectorAll('.single-card')
    cards.forEach( card => {
        card.addEventListener('dragstart', e => {
            setTimeout( e => card.classList.add('hide') , 40)
        })
        card.addEventListener('dragend', e => {
            setTimeout( e => card.classList.remove('hide') , 40)
        })
    })

    const removeSlotHoverClass = e => e.currentTarget.classList.remove('slot-hover');

    // Drag and Drop Card in Hand
    const dragover = e => {
        e.preventDefault()
    }
    const dragenter = e => {
        e.currentTarget.classList.add('slot-hover');
    }
    const dragleave = e => {
        removeSlotHoverClass(e);
    }
    const drop = (e, slot) => {
        removeSlotHoverClass(e);
        const draggedCard = document.querySelector('.show-full-deck .single-card.hide')
        if ( draggedCard )
            slot.querySelector('.card-container').insertAdjacentElement( 'beforeend', draggedCard )

        setTimeout( e => {
            const newCardInHand = document.querySelector('.drawed-cards .hide')
            if ( newCardInHand ) newCardInHand.classList.remove('hide')
        }, 80);
    }

    // Drag card in hand
    const hand = document.querySelectorAll('.drawed-cards')
    hand.forEach( slot => {
        slot.addEventListener( 'dragover',  e => dragover(e) );
        slot.addEventListener( 'dragenter', e => dragenter(e) );
        slot.addEventListener( 'dragleave', e => dragleave(e) );
        slot.addEventListener( 'drop',      e => drop(e, slot) );
    })
}
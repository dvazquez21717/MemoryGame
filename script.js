
const cardsArray = [1,1,2,2,3,3,4,4,5,5,6,6]

const board = document.querySelector('.flex-container')

var selected = []

cardsArray.sort(() => 0.5 - Math.random())


function resetBoard(){
    board.innerHTML = ''
    cardsArray.sort(() => 0.5 - Math.random())
    createBoard()
}

function createBoard(){
    board.innerHTML = ''
    for(let i = 0; i < cardsArray.length; i++ ){
        var card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', i)
        card.addEventListener("click", flip);
        // card.onclick() = function(){flip()}
        card.innerHTML = cardsArray[i];
        card.style.width = '400px';
        board.appendChild(card)
        
    }

}

function flip(){
    var card_id = this.getAttribute('id')
    selected.push(card_id)
    // selected.push(position)
    if(selected.length === 2){
        console.log('test');
        setTimeout(matched, 600)
    }

}

function matched(){
    console.log('clicked');
    var cards = document.getElementsByClassName('card')
    var first_id = selected[0]
    var second_id = selected[1]
    var first_card = cardsArray[first_id]
    var second_card = cardsArray[second_id]
    if(first_card === second_card && first_id != second_id){
        alert('Match found!')
        cards[first_id].innerHTML = 'matched'
        cards[second_id].innerHTML = 'matched'
    }else{
        alert('No match')
    }
    selected = []
}

// createBoard()
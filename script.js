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
        // card.setAttribute()
        card.addEventListener("click", flip());
        // card.onclick() = function(){flip()}
        card.innerHTML = cardsArray[i];
        card.style.width = '400px';
        board.appendChild(card)
        
    }

}

function flip(){
    console.log('test');
    // selected.push(position)
    if(selected.length === 2){
        console.log('test');
        setTimeout(matched(), 600)
    }

}

function matched(){
    console.log('clicked');
}

// createBoard()
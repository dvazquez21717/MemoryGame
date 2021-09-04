
const cardsArray = [
    {name: "Aries", img:"images/aries.png"},
    {name: "Aries", img:"images/aries.png"},
    {name: "Cancer", img:"images/cancer.png"},
    {name: "Cancer", img:"images/cancer.png"},
    {name: "Libra", img:"images/libra.png"},
    {name: "Libra", img:"images/libra.png"},
    {name: "Pisces", img:"images/pisces.png"},
    {name: "Pisces", img:"images/pisces.png"},
    {name: "Scorpio", img:"images/scorpio.png"},
    {name: "Scorpio", img:"images/scorpio.png"},
    {name: "Virgo", img: "images/virgo.png"},
    {name: "Virgo", img: "images/virgo.png"}
]

const board = document.querySelector('.flex-container')

var selected = [];
var clicks = 0;
var scores = 0;

cardsArray.sort(() => 0.5 - Math.random())


// from stackoverflow to reset page 
function resetBoard(){
   window.location.reload();
   clicks = 0;
}

function createBoard(){
    board.innerHTML = ''
    for(let i = 0; i < cardsArray.length; i++ ){
        var parent = document.createElement('div');
        var card = document.createElement('img');
        parent.classList.add('parent');
        card.classList.add('card');
        card.setAttribute('id', i);
        card.setAttribute('src', 'images/questionmark.png')
        card.addEventListener("click", flip);
        card.innerHTML = cardsArray[i];
        parent.appendChild(card);
        board.appendChild(parent);


    }
    var btn = document.getElementsByClassName("reset")[0];
    btn.style.display = 'flex';

}

function flip(){
    var card_array_id = this.getAttribute('id')
    selected.push(card_array_id)
    this.setAttribute('src', cardsArray[card_array_id].img)
    // selected.push(position)
    if(selected.length === 2){
        setTimeout(matched, 500)
        clicks++;
    }

}

function matched(){
    var cards = document.getElementsByClassName('card')
    var first_id = selected[0]
    var second_id = selected[1]
    var first_card = cardsArray[first_id].name
    var second_card = cardsArray[second_id].name
    if(first_card === second_card && first_id != second_id){
        alert('Match found!'+ " current try is: "+ clicks );
        ++scores;
        if(scores === cardsArray.length/2){
            alert("your total tries are: " + clicks);
            resetBoard();
        }

    }else{
        alert('No match,'+ " current try is: "+ clicks )
        cards[first_id].setAttribute('src', 'images/questionmark.png')
        cards[second_id].setAttribute('src', 'images/questionmark.png')
    }
    selected = []
}

// createBoard() 
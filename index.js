/*--------Declatarions--------------*/
let cards= []
let sum = 0
let hasBlackJack = false
let isAlive = false
/*---------Change Message-------------*/
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.querySelector("#sum-el");
let cardEl= document.querySelector("#card-el");
/*--------Name + Chips--------------*/
let player = {
    name: "Lucas",
    chips: 420
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;
/*--------Function StartGame-------------*/
function startGame(){
    isAlive= true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards= [firstCard, secondCard];
    sum = cards[0]+ cards[1];
    renderGame();
}
/*---------Function RenderGame--------------*/
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    cardEl.textContent= "Cards:"
    for(let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "; 
    }
    sumEl.textContent= "Sum: " + sum;
    messageEl.textContent = message;
}
/*---------Function RamdomCard--------------*/
function getRandomCard(){
    randNum=Math.floor(Math.random()*13)+1;
    if (randNum === 1){
        return 11
    } else if( randNum > 10){
        return 10;
    } else {
        return randNum;
    }
}
/*---------Function NewCard--------------*/
function newCard(){
    if( isAlive === true && hasBlackJack === false ){
        let newCard= getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
        
    }
   
   
}
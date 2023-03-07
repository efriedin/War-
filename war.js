//create class for Deck
class Deck {
    constructor(){
        this.suits = ['Spade','Diamond','Clubs','Hearts'];
        this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];      
    }
    //Create deck 
    createDeck(){
        let deck = [];    
        for (let i = 0; i < this.suits.length; i++){
            for(let x = 0; x < this.values.length; x++){
                let card = "Value: " + this.values[x] + ", " + "Suit: " + this.suits[i];
                deck.push(card);
            } console.log("HERE : "+this.cardIndex);
        } return deck;
    }   
}


//create class for Player
class Player{
    constructor(playerPoints, playerHand){
        //Player points
        this.playerPoints = playerPoints;
        //Hand of 26 cards
        this.playerHand = playerHand;
    }

    //method for adding cards to hand
    addCard(card){
        this.playerHand.push(card);
        //console.log(this.playerHand);
    }
    viewhand(){
        console.log(this.playerHand);
    }
    getHand(){
        return this.playerHand;
    }
    //method for removing card from hand
    //method for assigning points 
    addPoints(){
        this.playerPoints++;
    }
    
    //method for getting points
    getPoints(){
        return this.playerPoints;
    }
}

//create class for Card
class Card {
    constructor (deck){
        this.deck = deck;
        this.cardIndex = [...Array(52).keys()];  
    }
    pickCard(){
        //random pick card index from given deck array
        console.log("Length"+deck.length);
        let randomIndex = Math.floor(Math.random() * this.cardIndex.length);
        let randomCard = this.cardIndex[randomIndex];
        //remove card
        this.cardIndex.pop(randomIndex);
        //return card
        return (randomCard);
    }
    getCard(cardIndex){
        return this.deck[cardIndex];
    }

    //update function
    updateCardIndex(){
        this.cardIndex.pop(index);
    }
}
    

//main
let deckObj = new Deck ();
let deck = deckObj.createDeck();
console.log(deck);
let cardObj = new Card(deck);

//console.log(cardIndex);
//console.log(deck[cardIndex]);
let player1 = new Player(0, []);
let player2 = new Player(0, []);

//create player hands
let tempDeck = deck.slice();
console.log(typeof(tempDeck));
let cardObjTemp = new Card (tempDeck);
for (let i = 0; i < 25; i++){
    //add player1 cards
    let cardIndex = cardObjTemp.pickCard();
    player1.addCard(cardIndex);
    console.log(cardIndex);     
    //tempDeck.pop(tempDeck[cardIndex]);
    
    //add player2 cards
    cardIndex = cardObjTemp.pickCard();
    player2.addCard(cardIndex);
    console.log(cardIndex);
    //tempDeck.pop(tempDeck[cardIndex]);
}

    
  
player1.viewhand();
player2.viewhand();
console.log(tempDeck);

//initializing card class to randomly select from each players hand 
let player1Hand = new Card (player1.getHand());
let player2Hand = new Card (player2.getHand());
//pick random card from player1's hand
let player1Card = player1Hand.pickCard();
console.log(cardObj.getCard(player1Card));
//pick random card from player 2's hand
let player2Card = player2Hand.pickCard();
console.log(cardObj.getCard(player2Card));

//adjust values of each player's card
let compareP1 = 0;
let compareP2 = 0;
if(player1Card > 12 && player1Card < 26 ){
    compareP1 = player1Card - 13;
} else if (player1Card > 25 && player1Card < 39){
    compareP1 = player1Card - 26;
}else if(player1Card > 45 && player1Card < 52){
    compareP1 = player1Card - 39;
}else {
    compareP1 = player1Card;
}

if(player2Card > 12 && player2Card < 26 ){
    compareP2 = player2Card - 13;
} else if (player2Card > 25 && player2Card < 39){
    compareP2 = player2Card - 26;
}else if(player2Card > 45 && player2Card < 52){
    compareP2 = player2Card - 39;
}else {
    compareP2 = player2Card;
}
//compare and assign points to player with higher valued card
if(compareP1 > compareP2){
    player1.addPoints();
    console.log("Play1 wins! score: " + player1.getPoints());
} else if(compareP2 > compareP1){
    player2.addPoints();
    console.log("Play2 wins! score: " + player2.getPoints());
} else {
    console.log("It's a tie!");
}
//remove card from player1's hand 
//remove card from player2's hand


//funtion to iterate through turns array
    //player plays 1 card each turn
    //player with the higher card is awarded 1 point
    //do nothing for a tie
    //remove card from hand
    //display score and declare the winner
//global variables
var dealerValue=0;
var playerValue=0;
var hidden;
var deck;
var playerHand=[];
var dealerHand=[];
var playerWins=0;
var dealerWins=0;

var ableHit=true;

function createDeck(){
    class Card{
        constructor(suit, rank){
            this.suit=suit;
            this.rank=rank;
            this.faceUp=false;
        }
        reveal(){
            this.faceUp=true;
        }
        hide(){
            this.faceUp=false;
        }
        toString(){
            if (this.faceUp){
                return `${this.rank} of ${this.suit}`;
             }
             else{
                return `Card is face down`;
             }
            }
        }
        class Deck{
            constructor(){
                this.cards=[];
                this.suits=["Diamonds","Hearts","Clubs","Spades"];
                this.ranks=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

                for (let suit of this.suits){
                    for (let rank of this.ranks){
                        this.cards.push(new Card(suit, rank));
                    }
                }
            }
        }
        let deck=new Deck();
        return deck;
    }


function toPlayer(card){
    switch(card){
        case `Ace of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Ace of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Ace of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Ace of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `King of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `King of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `King of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `King of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Queen of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Queen of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Queen of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Queen of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Jack of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Jack of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Jack of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `Jack of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `10 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `10 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `10 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `10 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `9 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `9 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `9 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `9 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `8 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
         case `8 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
         case `8 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
         case `8 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
         case `7 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `7 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `7 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `7 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `6 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `6 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `6 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `6 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `5 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `5 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `5 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `5 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `4 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `4 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `4 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `4 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `3 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `3 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `3 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `3 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `2 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-D.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `2 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-H.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `2 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-C.png";
            document.getElementById("player-hand").append(cardImg);
            break;
        case `2 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-S.png";
            document.getElementById("player-hand").append(cardImg);
            break;


    }
}

function toHidden(hidden){
    switch(hidden){
        case `Ace of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Ace of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Ace of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Ace of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `King of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `King of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `King of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `King of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Queen of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Queen of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Queen of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Queen of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Jack of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Jack of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Jack of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `Jack of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `10 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `10 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `10 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `10 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `9 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `9 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `9 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `9 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `8 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
         case `8 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
         case `8 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
         case `8 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
         case `7 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `7 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `7 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `7 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `6 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `6 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `6 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `6 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `5 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `5 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `5 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `5 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `4 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `4 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `4 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `4 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `3 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `3 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `3 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `3 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-S.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `2 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-D.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `2 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-H.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `2 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-C.png";
            document.getElementById("hidden").append(cardImg);
            break;
        case `2 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-S.png";
            document.getElementById("hidden").append(cardImg);
            break;


    }
}
//Uses switch statement to 
function toDealer(card){
    switch(card){
        case `Ace of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Ace of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Ace of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Ace of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/A-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `King of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `King of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `King of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `King of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/K-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Queen of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Queen of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Queen of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Queen of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/Q-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Jack of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Jack of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Jack of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `Jack of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/J-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `10 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `10 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `10 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `10 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/10-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `9 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `9 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `9 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `9 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/9-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `8 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
         case `8 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
         case `8 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
         case `8 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/8-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
         case `7 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `7 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `7 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `7 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/7-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `6 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `6 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `6 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `6 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/6-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `5 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `5 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `5 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `5 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/5-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `4 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `4 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `4 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `4 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/4-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `3 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `3 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `3 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `3 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/3-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `2 of Diamonds`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-D.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `2 of Hearts`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-H.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `2 of Clubs`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-C.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;
        case `2 of Spades`:
            var cardImg=document.createElement("img");
            cardImg.src="/Images/Cards/2-S.png";
            document.getElementById("dealer-hand").append(cardImg);
            break;


    }
}
function cardValue(card){
        switch(card){
          case "Ace of Diamonds":
            value=1;
            return value;
            break;
          case "Ace of Hearts":
            value=1;
            return value;
            break;
       
          case "Ace of Clubs":
            value=1;
            return value;
            break;
          case "Ace of Spades":
            value=1;
            return value;
            break;
          case "King of Diamonds":
            value=10;
            return value;
            break;
          case "King of Hearts":
            value=10;
            return value;
            break;
          case "King of Clubs":
            value=10;
            return value;
            break;
          case "King of Spades":
            value=10;
            return value;
            break;
          case "Queen of Diamonds":
            value=10;
            return value;
            break;
          case "Queen of Hearts":
            value=10;
            return value;
            break;
          case "Queen of Clubs":
            value=10;
            return value;
            break;
          case "Queen of Spades":
            value=10;
            return value;
            break;
          case "10 of Diamonds":
            value=10;
            return value;
            break;
          case "10 of Hearts":
            value=10;
            return value;
            break;
          case "10 of Clubs":
            value=10;
            return value;
            break;
          case "10 of Spades":
            value=10;
            return value;
            break;
          case "9 of Diamonds":
            value=9;
            return value;
            break;
          case "9 of Hearts":
            value=9;
            return value;
            break;
          case "9 of Clubs":
            value=9;
            return value;
            break;
          case "9 of Spades":
            value=9;
            return value;
            break;
          case "8 of Diamonds":
            value=8;
            return value;
            break;
          case "8 of Hearts":
            value=8;
            return value;
            break;
          case "8 of Clubs":
            value=8;
            return value;
            break;
          case "8 of Spades":
            value=8;
            return value;
            break;
          case "7 of Diamonds":
            value=7;
            return value;
            break;
          case "7 of Hearts":
            value=7;
            return value;
            break;
          case "7 of Clubs":
            value=7;
            return value;
            break;
          case "7 of Spades":
            value=7;
            return value;
            break;
          case "6 of Diamonds":
            value=6;
            return value;
            break;
          case "6 of Hearts":
            value=6;
            return value;
            break;
          case "6 of Clubs":
            value=6;
            return value;
            break;
          case "6 of Spades":
            value=6;
            return value;
            break;
          case "5 of Diamonds":
            value=5;
            return value;
            break;
          case "5 of Hearts":
            value=5;
            return value;
            break;
          case "5 of Clubs":
            value=5;
            return value;
            break;
          case "5 of Spades":
            value=5;
            return value;
            break;

          case "4 of Diamonds":
            value=4;
            return value;
            break;

          case "4 of Hearts":
            value=4;
            return value;
            break;

          case "4 of Clubs":
            value=4;
            return value;
            break;
          case "4 of Spades":
            value=4;
            return value;
            break;
          
          case "3 of Diamonds":
            value=3;
            return value;
            break;
          
          case "3 of Hearts":
            value=3;
            return value;
            break;
          case "3 of Clubs":
            value=3;
            return value;
            break;
          case "3 of Spades":
            value=3;
            return value;
            break;
          case "2 of Diamonds":
            value=2;
            return value;
            break;

          case "2 of Hearts":
            value=2;
            return value;
            break;

          case "2 of Clubs":
            value=2;
            return value;
            break;

          case "2 of Spades":
            value=2;
            return value;
            break;

          case "Jack of Diamonds":
            value=10;
            return value;
            break;

          case "Jack of Hearts":
            value=10;
            return value;
            break;

          case "Jack of Clubs":
            value=10;
            return value;
            break;

          case "Jack of Spades":
            value=10;
            return value;
            break;
        }
        }
function shuffleDeck(deck){
    for (let i=0; i<deck.cards.length;i++){;
        let j=Math.floor(Math.random()*deck.cards.length);
        let temp=deck.cards[i];
        deck.cards[i]=deck.cards[j];
        deck.cards[j]=temp;
    }
    return deck;

}

function hit(){
    if (!ableHit){
        return
    }
    card=hitMe(deck);
    card=cleanVariable(card);
    playerValue+=cardValue(card);
    toPlayer(card);
    document.getElementById("score2").innerHTML=`${playerValue}`;
    if (playerValue>21){
        ableHit=false;
    }


}

function standPlace(){
    ableHit=false;
    dealerPlay(deck)
    if (playerValue>21){
        document.getElementById("result").innerHTML="YOU BUSTED! YOU LOSE!"
    }
    else if (dealerValue>21){
        document.getElementById("result").innerHTML="DEALER BUSTED! YOU WIN!";

    }
    else if (dealerValue==playerValue){
        document.getElementById("result").innerHTML="It's a tie!";
    }
    else if (dealerValue>playerValue){
        document.getElementById("result").innerHTML="You Lose!";
    }
    else if (dealerValue<playerValue){
        document.getElementById("result").innerHTML="Congratulation! You win!";
    }
}
function resetGame(){
    alert("Hello World");

    
}



 


function hitMe(deck){
    var card=deck.cards.pop();
    card.reveal();
    card.toString();
    return card;
}
//cleans variable for switch statement processing
function cleanVariable(card){
    var array=[];
    array.unshift(card);
    var card1=array.toString();
    return card1;
}
function dealerPlay(deck){
    //deal dealer's hand: first hidden card
   //deal additional cards to dealer
    while (dealerValue<17){
        card=hitMe(deck);
        card=cleanVariable(card);
        dealerValue+=cardValue(card);
        toDealer(card);
        
    }
    document.getElementById("score1").innerHTML=`${dealerValue}`;
}
    // deal 2 cards to player using while loop
function userPlay(deck){
    let count=0;
    while (count<2){
        card=hitMe(deck);
        card=cleanVariable(card);
        playerValue+=cardValue(card);
        toPlayer(card);
        count++;
    }
    document.getElementById("score2").innerHTML=`${playerValue}`;
    document.getElementById("Hit").addEventListener("click", hit);
    document.getElementById("Stay").addEventListener("click", standPlace);
    document.getElementById("Restart").addEventListener("click", resetGame);


}  







function manipulateDeck(deck){
   for (i=0; i<deck.cards.length;i++){
        card=deck.cards[i]
        card.reveal();
        card.toString()
        card1=cleanVariable(card)
        toDealer(card1);
        
    }

}


function scrambleDeck(){
    deck=createDeck();
    deck=shuffleDeck(deck);
    manipulateDeck(deck);
}




window.onload=function(){
    deck=createDeck();
    deck=shuffleDeck(deck);
    userPlay(deck);
    
}

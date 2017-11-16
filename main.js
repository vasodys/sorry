const fullDeck = [1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];
var deck = null;

var startGame = function(){
    if(deck == null || deck.length == 0){
        $("#start")[0].innerHTML = "";
        deck = fullDeck.slice(0,52);
        drawCard();
    } else{
        drawCard();
    }
}

var drawCard = function(){
    var cardNode = $("#card");
    var random = Math.round((deck.length - 1) * Math.random());
    if (random == -0){
        random = 0;
    }
    cardNode.css("color", "white");

    var card = deck[random].toString();
    if (card == "13"){
        card = "Sorry!";
    };
    cardNode[0].innerHTML = card;
    setTimeout(function(){
        $("#card").css("color", "black");
    },100);
    deck.splice(random, 1);
}





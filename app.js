var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
console.log(board);
const player1_button = document.getElementById('player-1');
const player2_button = document.getElementById('player-2');

console.log(player1_button);
console.log(player2_button);

var player1 = ["ProGrad",0,1000];
var player2 = ["FACEprep",0,1000];



function rollDicePlayer1(){
    let position = Math.floor(Math.random()*6)+1;
    console.log("Player one rolls",position);
    changePosition1(player1[1],position);
}

function rollDicePlayer2(){
    let position = Math.floor(Math.random()*6)+1;
    console.log("Player two rolls",position);
    changePosition2(player2[1],position);
}

function changePosition1(old,currentPos){
    var newPosition = old+currentPos;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney1(player1[1]);
}

function changePosition2(old,currentPos){
    var newPosition = old+currentPos;
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney1(player2[1]);
}

function updateMoney1(p1){
    var updateMoney = 0;
    if(p1<board.length)
        updateMoney = player1[2] - board[p1-1];
    else{
        p1 = p1%15;
        updateMoney = player1[2]-board[p1-1];
    }
    console.log(updateMoney);
}
function updateMoney2(p1){
    var updateMoney = 0;
    if(p1<board.length)
        updateMoney = player2[2] - board[p1-1];
    else{
        p1 = p1%15;
        updateMoney = player2[2]-board[p1-1];
    }
    console.log(updateMoney);
}
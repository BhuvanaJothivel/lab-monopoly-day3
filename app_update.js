var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
console.log(board);
const player1button = document.getElementById('player_1');
const player2button = document.getElementById('player_2');

class Player{
    constructor(name,position,money){
        this.name = name;
        this.position = position;
        this.money = money;
    }
    rollDice(){
        let pos = Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos){
        this.position += pos;
        console.log(this.position);
        this.updateMoney();
    }
    updateMoney(){
        if(this.position<board.length)
            this.money -= board[this.position]
        else{
            this.position %= 15;
            this.money -= board[this.position];
        }
        console.log(player1);
        console.log(player2);
    }
}

let player1 = new Player("ProGrad",0,1000);
let player2 = new Player("FACEprep",0,1000);

function rollDicePlayer1(){
    player1.rollDice();
}

function rollDicePlayer2(){
    player2.rollDice();
}
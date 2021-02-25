var canvas,backgroundImage;
var database;
var gameState=0;
var playerCount;
var form, player, game;
var allPlayers;
var distance=0;


function setup(){
 canvas=createCanvas(400,400);
    database=firebase.database();
    console.log(database);
    game=new Game();
    game.getState();
    game.start();
 
}
function draw(){
    background("white");
  
    drawSprites();
}


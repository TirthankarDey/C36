var database;
var  canvas;

var gameState = 0;
var playerCount = 0;

var form, player, game;


function setup(){

 
  canvas = createCanvas(500,500);

   //Create a firebase database object
   database = firebase.database();
   
   game = new Game();
   game.getState();
   game.start();

}

function draw(){
  background("white");
}
  
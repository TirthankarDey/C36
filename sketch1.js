var hypnoticBall, database;
var position;


function setup(){

  //Create a firebase database object
  database = firebase.database();
  console.log(database);

  createCanvas(500,500);

  //Create a ball sprite
  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";

  //Create a reference to the db location using ref() for the value that we want, that is, ball/position
  var hypnoticBallPosition = database.ref('ball/position');

  //Create a listener to the db location in the ref using on();
  //When the value changes in the db, then automatically the readPosition function will be called 
  //and the data from the db will be passed to it 
  hypnoticBallPosition.on("value", readPosition, showError);
}

/*Firebase db structure
ball{
  position: {
    x: 200
    y:200
  }
}*/

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){

  //Call the ref() and set() functions to write the x and y position of the ball to the firebase db
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  
  //data will contain the db values
  //data.val() will extract the values from the db and store it in position variable 
  position = data.val();

  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}

/*
{
	gameState : 0,  //gameState will be equal to either 0 or 1
 	playerCount : 0,  //max no of players should be 4
	player1 : {name: “”},
	player2: {name: “”}
	player3: {name: “”}
	player4: {name: “”}
}

Objects:
1) Form object -> Input box for the name, Play button
2) Player object -> Player's name, playerCount
3) Game Object -> gameState

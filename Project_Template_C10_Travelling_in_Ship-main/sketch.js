//Good job am proud of you keep trying 

//declare all variables
var sea,sea_image;
var ship,ship_rocking;


//Load animation
function preload(){
  ship_rocking= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_image= loadImage("MySea.png");
}

function setup(){
  createCanvas(700,500);

  //Create a sprite for the sea and add an image to it such that it looks like the background
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",sea_image);
  sea.x = sea.width /2;
  sea.scale= 3;
  //create a sprite for the ship
  ship = createSprite(350,250);
  ship.addAnimation("rocking",ship_rocking);
  ship.scale= 0.3;
}

function draw() {
 
  background(220);
  
  sea.velocityX = -2
  
  if (sea.x<0){
    sea.x = sea.width/2;
  }

  drawSprites();
}
var mop, broom;
var edges;
var mopVelocity, broomVelocity;

function setup() {
  createCanvas(800,400);


  broom = createSprite(400, 200, 100, 100);
  broom.shapeColor = "limegreen";
  broom.velocityX = 5;
  broom.velocityY = 4;
  
  mop = createSprite(600,200,100,100);
  mop.shapeColor = "limegreen";
  mop.velocityX = -4;
  mop.velocityY = -5;


  edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);  


  /*mop.x = mouseX;
  mop.y = mouseY;*/


  broom.bounceOff(edges);
  if(mop.x - broom.x <= (mop.width+broom.width)/2 && broom.x - mop.x <= (broom.width+mop.width)/2 && mop.y - broom.y <= (mop.height+broom.height)/2 && broom.y - mop.y <= (broom.height+mop.height)/2){
    broom.velocityX = mopVelocity[0];
    mop.velocityX = broomVelocity[0];
    broom.velocityY = mopVelocity[1];
    mop.velocityY = broomVelocity[1];
  }
  mop.bounceOff(edges);



  if(mop.x - broom.x <= (mop.width+broom.width)/2 && broom.x - mop.x <= (broom.width+mop.width)/2 && mop.y - broom.y <= (mop.height+broom.height)/2 && broom.y - mop.y <= (broom.height+mop.height)/2){
    mop.shapeColor = "red";
    broom.shapeColor = "red";
  }else{
    mop.shapeColor = "limegreen";
    broom.shapeColor = "limegreen";
  }


  mopVelocity = [mop.velocityX, mop.velocityY];
  broomVelocity = [broom.velocityX, broom.velocityY];


  drawSprites();
}
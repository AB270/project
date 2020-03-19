var trex,trexRunning,trexCollided;
var ground,invisibleGround,groundImg;
var cloud,cloudImg;

function preload(){
 trexRunning=loadAnimation("trex1.png","trex3.png",
"trex4.png");
  trexCollided=loadImage("trex_collided.png");
  groundImg=loadImage("ground2.png");
  cloudImg=loadImage("cloud.png");
}

function setup() {
  createCanvas(400, 400);
  //trex
  trex=createSprite(30,340,10,10);
  trex.addAnimation("running",trexRunning);
  trex.scale=0.6;
  //ground
  ground=createSprite(30,350,10,10);
  ground.addImage("ground",groundImg);
  ground.velocityX=-3;
  //invisible ground
  invisibleGround=createSprite(30,360,10,10);
  invisibleGround.visible=false;
  //cloud
  cloud=createSprite(350,200,10,10);
  cloud.addImage("cloud",cloudImg);
  cloud.velocityX=-3;
  }

function draw() {
  background(255);
 if(keyDown("space")){
   trex.velocityY=-10;
 }
  trex.velocityY=trex.velocityY+0.8;
  
  if(ground.x<0){
    ground.x=200;
  }
 
  trex.collide(invisibleGround);
  drawSprites();

}
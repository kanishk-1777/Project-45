var bg,bgImg;
var player,playerRunning;
var badRobo,badImg;

function preload()
{
  bgImg = loadImage("destroyed background.jpg");
  playerRunning = loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png",)
  badImg    =  loadAnimation("robot5.png","robot4.png","robot3.png","robot2.png","robot1.png")
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/1-500,displayHeight/2-30,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1

  player = createSprite(displayWidth-800, displayHeight-450, 50, 50);
  player.addAnimation("Running",playerRunning)
  player.scale = 0.7

  badRobo = createSprite(displayWidth-300,displayHeight-430,50,50);
  badRobo.addAnimation("BAD",badImg);
  badRobo.scale = 2.5;
}

function draw() {
  background(0);  
  drawSprites();
}
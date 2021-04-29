
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,shark,whale,sharkImg,whaleImg;

function preload()
{
bg = loadImage("sea.jpg")
sharkImg = loadImage("shark.png")
whaleImg = loadImage("bwhale.png")

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  shark = createSprite(200,200);
  shark.addImage(sharkImg);
  shark.scale = 0.5;
  
  whale = createSprite(590,130);
  whale.addImage(whaleImg);
  whale.scale = 0.8;
  
  drawSprites();
 
}




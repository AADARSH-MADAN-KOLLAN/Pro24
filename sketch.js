var paper, bL1, bL2, bL3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-5, width, 20)

	bL1 = new DL(width-80,height-70,20,100);
	bL2 = new DL(width-250,height-70,20,100);
	bL3 = new DL(width-165,height-20,190,20);

	paper = new Paper(100, 693, 25);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bL1.display();
  bL2.display();
  bL3.display();
  paper.display();
  ground.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW && paper.body.position.x === 100){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-100});
	}
}



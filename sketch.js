var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(300,50,475,20);
	bob1 = new Bob(100,300,45);
	bob2 = new Bob(200,300,45);
	bob3 = new Bob(300,300,45);
	bob4 = new Bob(400,300,45);
	bob5 = new Bob(500,300,45);
  chain1 = new Chain(bob1.body,roof.body);
  chain2 = new Chain(bob2.body,roof.body);
  chain3 = new Chain(bob3.body,roof.body);
  chain4 = new Chain(bob4.body,roof.body);
  chain5 = new Chain(bob5.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function keyPressed(){
   if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1body,bob1.body.position,{x:-50,y:50}); 
   }
}



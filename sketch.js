var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	




	engine = Engine.create();
	world = engine.world;
	//CREATING PACKAGE AND HELICOPTER
	helicopter = Bodies.rectangle(width/2, 150, 250, 150 , {isStatic:true} );
	packageBody = Bodies.circle(width/2 , 150 , 50 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	World.add(world,helicopter);

	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	b1=new Box(width/2,630,200,10)
	b2 = new Box(width/2-105, 580,10,200 )
	b3 = new Box(width/2+105, 580,10,200 )
	Engine.run(engine);
  
}


function draw() {

	background(0);
	rect(ground.position.x, ground.position.y, width, 10)
	imageMode(CENTER);
	image(packageIMG, packageBody.position.x, packageBody.position.y, 70,70);
	image(helicopterIMG, helicopter.position.x, helicopter.position.y, 250,150);
	b1.display();
	b2.display();
	b3.display()
  
  
//image(ground.positon.x, ground.position.y, width, 10);


 
}
//event based function
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}




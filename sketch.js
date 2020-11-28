
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1;
var ground;
var d1,d2,d3;
var dust;
function preload()
{
	dust=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper(100,360,25);
ground=new Ground(800,690,1600,30);
d1= new Dustbin(1300,665,170,20);
d2=new Dustbin(1205,615,20,120);
d3=new Dustbin(1395,615,20,120);
	//Engine.run(engine);

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	  Render.run(render);*/
	
  
}


function draw() {
  
  background("lightskyblue");
  Engine.update(engine);
  
ground.display();

d1.display();
d2.display();
d3.display();
imageMode(CENTER);
	image(dust,1300,600,250,150);
	paper1.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65});
  
	}
}



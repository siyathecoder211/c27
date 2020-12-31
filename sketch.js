
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var hanger;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hanger = new roof(600,600,500,20);
	bob1= new bob(600,900,50);
	bob2= new bob(700,900,50);
	bob3= new bob(500,900,50);
	bob4= new bob(550,900,50);
	bob5= new bob(650,900,50);


	bob1con=new connection(bob1.body,hanger.body,0,0);
	bob2con=new connection(bob2.body,hanger.body,100,0);
	bob3con=new connection(bob3.body,hanger.body,-100,0);
	bob4con=new connection(bob5.body,hanger.body,50,0);
	bob5con=new connection(bob4.body,hanger.body,-50,0);

	Engine.run(engine);
  
}


function draw() {
  
  background("white");

  hanger.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  bob1con.display();
  bob2con.display();
  bob3con.display();
  bob4con.display();
  bob5con.display();
  
  

  drawSprites();
  //keypressed();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-200,y:0});
	}
}






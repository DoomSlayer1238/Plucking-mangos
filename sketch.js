
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5,mango6

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	World.add(world,this.body);

	Engine.run(engine);
  

	mango1 = new Mango (500,400)
	mango2 = new Mango (520,400)
	mango3 = new Mango (540,400)
	mango4 = new Mango (560,400)
	mango5 = new Mango (580,400)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();

	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);



 drawSprites();
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y.mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
	

}




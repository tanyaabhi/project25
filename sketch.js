
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbin.png")	;
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var option={
		isStatic:true
		
	}
    
	bBody = Bodies.rectangle(400,655,200,10,option)      
    rBody = Bodies.rectangle(500,610,10,100,option)      
    lBody = Bodies.rectangle(300,610,10,100,option)

    World.add(world,bBody)      
    World.add(world,rBody)
	World.add(world,lBody)
	
	paper=new Paper(200,600,10)
	ground = Bodies.rectangle(400,665,800,10,option)  
	World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
	

	rect(bBody.position.x,bBody.position.y,200,10)
	rect(rBody.position.x,rBody.position.y,10,100)
	rect(lBody.position.x,lBody.position.y,10,100)

	paper.display();
	
	rect(ground.position.x,ground.position.y,800,10)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-15})
	}
}


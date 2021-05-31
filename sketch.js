
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world;
var dustBinO, paperO, groundO;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundO = new ground(width/2,670,width,20)
	dustBinO = new dustbin(100,650)
	paperO = new paper(200,450,70)
	
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paperO.display()
groundO.display()
dustBinO.display()	
	
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperO.body,paperO.body.position,{x:130,y:-145})

    
		
		

    
  	}
}







const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree_img;
var boy_img
var m1,m2
var rope;
function preload() {
	
	tree_img = loadImage('sprites/tree.png');
	boy_img = loadImage("sprites/boy.png")

}

function setup() {

	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750, 680, 1500, 20);
	stone = new Stone(110,520,20)
	m1 = new Mango(1100,300,25);
	m2 = new Mango(1175,350,25);
	rope = new Rope(stone.body, {x:110,y:520})
	//boy = new Boy(350, 500, 300, 300);
	//stone = new Stone(200, 350, 50, 50);
	//line = new Rope(boy.body, stone.body);
	//tree = image(tree_img, 800, 200, 400, 400);

	Engine.run(engine);
  
}

function draw() {
	
  background("lightBlue");

  ground.display();
   image(tree_img, 1000,180,200,500 )
  image(boy_img, 100,450,100,300 )
  m1.display();
  m2.display();
rope.display()
	stone.display();
	detectCollision(stone,m1)
	detectCollision(stone,m2)
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope.fly();
}

function keyPressed() {
	if (keyCode === 32) {
	  rope.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.radius+lstone.radius)
    {
 
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
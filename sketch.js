const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1 ;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig1 = new Pig(250,300)
   log1 = new Log (250 , 280,150,PI/2 )
   log2 = new Log (180,200,150,PI/7)
    box1 = new Box(200,300,50,50);
    box2 = new Box(300,300,50,50);
    box3 = new Box(250,245,50,50)

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    
}
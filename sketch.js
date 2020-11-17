

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;


var engine, world,w1;
var dust;

function preload()
    {
        dust = loadImage("dustbingreen.png");
    }


function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

     

    ground1 = new ground(600,height,1200,20);
    paper1 = new paper(200,390);
     
    box1 = new box(650,380,140,10);
    box2 = new box(580,500,10,170);
    box3 = new box(720,330,10,170); 
 
 
    
}
    
    function draw()
    {
        background("lightblue");
        Engine.update(engine);
        paper1.display();
        ground1.display();
        box1.display();
        box2.display();
        box3.display();
         image(dust,560,190,180,200);
        
     
        
        

        

        
 
    }
     
    function keyPressed() {
        if (keyCode === UP_ARROW) {
  
          Matter.Body.applyForce(paper1.body,paper1.body.position,{x:500,y:-900});
  
      
        }
  }


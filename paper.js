class paper
{
 constructor (x,y)
 {
  
 var options={
    'restitution' : 0.3,
    'friction' : 0.5,
    'density' : 1.2,
 }
 this.body = Bodies.circle(x,y,70,options)
 this.radius = 100;
 this.paper = loadImage("paper.png");
 World.add(world,this.body);
 }

 display()
 {
    var pos = this.body.position;
    push();
    translate(pos.x , pos.y);
    imageMode(CENTER);
   image(this.paper,0,0,this.radius);
   //ellipseMode(RADIUS)
   //ellipse(pos.x,pos.y,this.radius,this.radius);  
   pop(); 
 }
};

 
 
 
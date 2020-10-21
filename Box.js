
class Box {
 constructor(x,y,width,height){
     var box_options = {
         "restitution" : 0.5 ,
         "density" : 2 ,
         "friction" : 1
     }
    this.body = Bodies.rectangle(x,y,width,height,box_options)
    this.width = width
    this.height = height
    World.add(world,this.body)
 }

 display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y)
  rotate(angle)
  rectMode(CENTER)
  strokeWeight(5)
  stroke("green")
  fill(255)
  rect(0,0,this.width,this.height)
  pop();
 }
      
  
}
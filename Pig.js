class Pig {
    constructor(x,y){
        var pig_options = {
            "restitution" : 0.5 ,
            "density" : 2 ,
            "friction" : 0.4
        }
       this.body = Bodies.rectangle(x,y,50,50,pig_options)
       this.width = 50
       this.height = 50
       World.add(world,this.body)
    }
   
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y)
     rotate(angle)
     rectMode(CENTER)    
     fill(0,255,0)
     rect(0,0,this.width,this.height)
     pop();
    }
         
     
   }
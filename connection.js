class connection{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        //length: 200,
        //stiffness: 10,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
      
   this.chain=Matter.Constraint.create(options);
    World.add(world, this.chain);
}

    display(){
     var posA=this.chain.bodyA.position;
     var posB=this.chain.bodyB.position;

     var poiX=posB.x+this.offsetX;
     var poiY=posB.y+this.offsetY;
     line(posA.x,posA.y,poiX,poiY); 

    }

}

class Rope{
    constructor(obj1,obj2){
        var options={
            bodyA : obj1,
            pointB : obj2,
            length :400,
            stiffness : 0.1
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA,posB;
        posA=this.chain.bodyA.position;
        posB=this.chain.pointB;
        strokeWeight(3);

        line(posA.x,posA.y,posB.x,posB.y);
    }
}
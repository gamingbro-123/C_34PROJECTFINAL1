class Fly
{
    constructor(body1,point2)
    {
        var options = 
        {
           bodyA:body1,
           pointB:point2,
           length:300,
           stiffness:0.003
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }

    display()
    {
        var pos1 = this.rope.bodyA.position;
        var pos2 = this.rope.pointB;

        // line(pos1.x,pos1.y,pos2.x,pos2.y);

    }
}
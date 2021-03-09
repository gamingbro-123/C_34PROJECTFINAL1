class Hero
{
    constructor(xpos,ypos,radius)
    {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }

        this.body = Bodies.circle(xpos,ypos,radius,options);
        this.radius = radius;
        World.add(world,this.body);

    }

    display()
    {
        push();

        imageMode(CENTER);
        image(superHeroImg,this.body.position.x,this.body.position.y,this.radius+400,this.radius-20);
    }
}
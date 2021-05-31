class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.body = Bodies.elipse(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        elipseMode(CENTER);
        strokeWeight(4);
        stroke("yellow")
        fill(255);
        elipse( 0, 0, this.width, this.height);
        pop();
      }
}
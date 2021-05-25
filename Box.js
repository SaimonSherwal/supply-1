class Box{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
        this.w=w;
        this.h=h;

    }

    display(){
        push();
        fill("red")
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
        pop();
    }






}
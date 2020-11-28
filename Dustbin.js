class Dustbin{


	constructor(x,y,width,height)
	{
		var options={

            isStatic: true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png");
    }
	
	display()
	{
	 
            noStroke();
            rectMode(CENTER);
            //imageMode(CENTER);
            fill("green");
            //image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
			rect(this.body.position.x,this.body.position.y,this.width,this.height);
			

    }
}
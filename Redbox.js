class Redbox extends Box{ 
    constructor(x,y){ 
        super(x,y,20,30);
    }
    display(){ 
        if(this.body.speed<3){ 
        fill(223,119,121);
        super.display();
        }
        else{ 
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            rect(this.x,this.y,20,30);
           pop();
        }
    }

}
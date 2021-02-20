class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution :0,
            friction :1,
        }
        this.body = bodies.rectangle(x,y,this.width,this.height,options)
        this.height=50;
        this.width=50;

        display();{
          var pos = this.body.position
            rectMode(CENTER)
        }


    }
}
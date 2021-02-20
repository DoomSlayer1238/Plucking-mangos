class Stone {
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = bodies.rectangle(x,y,50,50,options)
        rectMode(CENTRE)
    }
}
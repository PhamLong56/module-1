class Circle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getX (x){
        return this.x;
    }
    getY (y){
        return this.y;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    getRadius(radius){
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }
}

    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius= Math.floor(Math.random()*80)
    let circle = new Circle(500,500,radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2, true);
    ctx.fill();
    console.log(circle)




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

     getRandomHex(){
        return Math.floor(Math.random() * 256);
    }
    getRandomColor(){
        let red= this.getRandomHex();
        let green= this.getRandomHex();
        let blue= this.getRandomHex();
        return "rgb(" + red + "," + green + "," + blue + ")";
    }
}

    // let x=200;
    // let y=200;
    // let ctx = document.getElementById("myCanvas").getContext("2d");
    // let radius= Math.floor(Math.random()*80)
    // let circle = new Circle(x,y,radius);
    // let color= circle.getRandomColor();
    // circle.setX(Math.random() * window.innerWidth);
    // circle.setY(Math.random() * window.innerHeight);
    // x=circle.getX();
    // y=circle.getY();
    //
    // ctx.beginPath();
    // ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
    // ctx.fillStyle = color
    // ctx.fill();

// for (let i = 0; i < 10; i++) {
//     let x=200;
//     let y=200;
//     let ctx = document.getElementById("myCanvas").getContext("2d");
//     let radius= Math.floor(Math.random()*80)
//     let circle = new Circle(x,y,radius);
//     let color= circle.getRandomColor();
//     circle.setX(Math.random() * window.innerWidth);
//     circle.setY(Math.random() * window.innerHeight);
//     x=circle.getX();
//     y=circle.getY();
//
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
//     ctx.fillStyle = color
//     ctx.fill();
let x=200;
let y=200;
let ctx = document.getElementById("myCanvas").getContext("2d");

    function createMultipleCircle(){

        let radius= Math.floor(Math.random()*80)
        let circle = new Circle(x,y,radius);
        let color= circle.getRandomColor();
        circle.setX(Math.random() * window.innerWidth);
        circle.setY(Math.random() * window.innerHeight);
        x=circle.getX();
        y=circle.getY();
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
        ctx.fillStyle = color
        ctx.fill();
    }
    function drawMultipleCircles(number){
        for (let i = 0; i < number; i++) {
            createMultipleCircle()
        }
    }
   drawMultipleCircles(Math.random()*100)
    console.log(circle)




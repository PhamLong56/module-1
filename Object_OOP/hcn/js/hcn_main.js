let myRectangle= new Rectangle(150,50);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();

myRectangle.setWidth(200);
myRectangle.getWidth();

document.write(myRectangle.getWidth());

let canvas = document.getElementById("DemoCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#490b0b";
ctx.fillRect(10,10,width,height)
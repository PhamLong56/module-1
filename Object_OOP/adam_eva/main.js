let adam = new Human("Adam",1, 65);
let eva = new Human("Eva",2, 55);
let apple_1= new Apple(10);

adam.say("I am Adam"+"<br>");
eva.say("I am Eva"+"<br>");

while (apple_1.isEmpty() !==true) {

    document.write("Adam eats an apple" +"<br>");
    adam.eat(apple_1);

    document.write("Number of apple is" +"<br>");
    document.write(apple_1.getWeight()+ " pcs " +"<br>");
    document.write("Adam's weight is: "+ adam.getWeight() + "kg" +"<br>");

    document.write("<br>");

    document.write("Eva eats an apple" +"<br>");
    eva.eat(apple_1);

    document.write("Number of apple is" +"<br>");
    document.write(apple_1.getWeight()+ " pcs " +"<br>");
    document.write("Eva's weight is: "+ eva.getWeight() + "kg" +"<br>");
}
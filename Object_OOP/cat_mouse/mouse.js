class Rat{
    name;
    weight;
    speed;
    sound_mouse;
    constructor(name,weight,speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.isAlive= true
    }
    chikchik(){
        document.write("Chik Chik" + "<br>")
    }

}
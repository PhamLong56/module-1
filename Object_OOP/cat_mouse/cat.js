class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    meow() {
        document.write("Meo Meo! <br>");
    }

    catchRat(rat) {
        if (this.maxSpeed > rat.speed && rat.isAlive) {
            document.write(`${this.name} catched ${rat.name}. <br>`)
            return true;
        } else {
            document.write(`${this.name}  don't catched ${rat.name}.<br>`)
            return false;
        }
    }
    eatRat(rat){
        if(rat.isAlive){
            this.weight += rat.weight;
            rat.isAlive= false;
            document.write(`${this.name} ate ${rat.name} and up weight is ${this.weight} kg <br>`);
        } else {
            document.write(`${rat.name} is die, don't eat.<br>`)
        }
    }

}
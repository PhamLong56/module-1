class Human {
    name;
    gender;
    weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }


    isMale() {
        if (this.gender === 1) {
            return true;
        } else {
            return false;
        }
    }

    getGender() {
        if (this.isMale()) {
            return "Male";
        } else {
            return "Female";
        }
    }

    setWeight(weight) {
        this.weight = weight;
    }

    say(string) {
        console.log(string)
    }

    checkApple(apple) {
        return apple.isEmpty()
    }

    eat(apple) {
        if (apple.getWeight() > 0) {
            apple.decreaseApple();
            this.weight++;
        } else {
            alert("Apple is empty")
        }
    }

    getInfo(human) {
        alert(human.name + "" + human.weight + "" + human.getGender())
    }
}
class Apple {
    constructor(weight) {
        this.weight = weight
    }
    getWeight (){
        return this.weight
    }
    setWeight (weight) {
        this.weight = weight
    }
    isEmpty(){
        if(this.weight<= 0){
            return true;
        }else {
            return false;
        }
    }
    decreaseApple (weight) {
        if(this.isEmpty()){
            alert("Het");
        }else {
            this.weight--;
        }
    }
}
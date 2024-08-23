class LampElectric {
    constructor() {
        this.status = false
    }
    turnOn(){
        this.status = true;
        console.log("Turn On");
    }
    turnOff(){
        this.status = false;
        console.log("Turn Off");
    }
}
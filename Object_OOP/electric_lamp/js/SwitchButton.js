class SwitchButton {
    status;
    lamp;
    constructor(status,lamp) {
        this.status= false;
        this.lamp = null ;
    }
    connectLamp(lamp){
        this.lamp = lamp;
    }
    switchOn(){
        if(this.lamp){
            this.status = true;
            console.log("Switch On");
        }
    }
    switchOff(){
        if(this.lamp){
            this.status = false;
            console.log("Switch Off");
        }
    }
}
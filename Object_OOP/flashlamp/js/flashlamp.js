class Flashlamp {
    status;
    battery;

    constructor(status, battery) {
        this.status = false;
        this.battery = null;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        if (this.battery) {
            return this.battery.getEnergy();
        }
        return 0;
    }

    turnOn() {
        if (this.battery && this.battery.getEnergy()) {
            this.status = true;
            document.write(" Lamp On")
        } else {
            document.write(" No Battery or Empty Battery");
        }
    }

    turnOff() {
        this.status = false
        document.write("Lamp Off")
    }

    light() {
        if (this.status && this.battery && this.battery.getEnergy() > 0) {
            document.write("---Energy Light---");
            this.battery.decreaseEnergy();
        } else if(!this.battery) {
            document.write(" Lamp Off");
        }else {
            document.write("No Battery Light");
        }
    }
}
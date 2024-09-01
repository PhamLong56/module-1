class Mobile {
    name;
    battery;
    inbox;
    outbox;
    message;
    status;

    constructor(name) {
        this.name = name;
        this.battery = 50;
        this.inbox = [];
        this.outbox = [];
        this.message = "";
        this.status = false;
    }

    checkStatus() {
        return this.status ? `${this.name} is ON` : `${this.name} is OFF`;
    }


    chargeBattery() {
        let x = setInterval(() => {
            if (this.battery === 100) {
                document.write("Battery is fully");
                clearInterval(x);
                return;
            }
            this.battery++
        }, 1000)
    }

    writeMessage() {
        if(this.status){
            this.message= text;
            this.decreaseBattery();
            return;
        }else {
            document.write("Turn on mobile first!")
        }
    }

    readInbox() {

    }

    readOutBox() {

    }

    sendMessage(phone, SMS) {
        if (this.status) {
            this.outbox.push(this.message);
            phone.inbox.push(this.message);
            this.decreaseBattery();
            document.write(`${this.name} send to ${phone.name}:  ${SMS}`);
        } else {
            document.write("Turn on mobile first!")
        }

    }

    decreaseBattery() {
        this.battery--

    }

    turnOn() {
        this.status = true
    }

    turnOff() {
        this.status = false
    }

}
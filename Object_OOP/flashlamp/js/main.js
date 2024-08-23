let battery = new Battery(8);
let lamp= new Flashlamp();
lamp.setBattery(battery);
lamp.turnOn();
lamp.light();
document.write("Battery energy: ",lamp.getBatteryInfo())
lamp.turnOff();
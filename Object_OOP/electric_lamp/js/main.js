let lamp= new LampElectric();
let switchButton = new SwitchButton();
switchButton.connectLamp(lamp);
for (let i = 0; i < 10; i++) {
    if(i%2===0){
        switchButton.switchOn()
    }else {
        switchButton.switchOff()
    }

}
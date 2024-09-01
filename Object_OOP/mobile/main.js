let samsung =new Mobile("Samsung Note 12")
let iphone= new Mobile("iPhone 15")
samsung.turnOn();
document.write(samsung.checkStatus());
document.write("<br>");
iphone.turnOn();
document.write(iphone.checkStatus());
document.write("<br>");
samsung.sendMessage(iphone, " say hello");
document.write("<br>");
iphone.sendMessage(samsung, " say hi");
document.write("<br>");
document.write(`Battery: iphone(${iphone.battery}) samsung(${samsung.battery})`);















// var fullName = "Day la \'Sieu Nhan\'"
//
// console.log(fullName)
// let a= 11
// if(a % 2 == 0) {
//     console.log(a  + 'is even');
// }
// else{
//     console.log(a  + 'is odd');
// }
// var a=10
// var isEven = a  % 2 == 0
// if(isEven) {
//     console.log(a  + "is even");
// }
// else{
//     console.log(a  + "is odd");
// }

// var a = 634344
// var b = 243545
// var c = 14534532
// if(a>b) {
//     if(a>c) {
//         console.log("So lon nhat la a =" + a);
//     } else {
//         console.log("So lon nhat la c =" + c);
//     }
// }else {
//     if (b>c) {
//         console,log("So lon nhat la b =" + b);
//     }else {
//         console.log("So lon nhat la c =" + c);
//     }
// }
// var isSuccess = 2>1
// if (isSuccess) {
//     console.log('DIEU KIEN DUNG')
// }else {
//     console.log('DIEU KIEN SAI')
// }
// var course = {
//     name: "Javascript",
//     coin: 300
// }
// // if( course.coin > 0){
// //     console.log(`${course.coin} Coins`)
// // }else {
// //     console.log('Free')
// // }
// result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
// console.log(result);
//
// var a = -1
// var b = 2
//
// var c = a > 0 ? a : b;
// console.log(c);

// const Monday = 1;
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//
// console.log("Weekday");
//         break;
//     case 0:
//     case 6:
// console.log("Weekend");
// }
// let  a = prompt("Enter a number");
// if(a>0){
//     if(a % 2 === 0){
//         alert("Day la so duong chan");
//     } else {
//         alert("Day la so duong le");
//         }
//     } else if(a === 0){
//         alert("Day la so 0");
//     }else {
//         if (a % 2 === 0){
//             alert("Day la so am chan");
//         }else {
//             alert("Day la so am le");
//         }
//     }
//     let opera = "+";
//     let a = 6;
//     let b = 3;
//     switch (opera) {
//         case "+":
//             alert("a+b="+ (a + b));
//             break;
//         case "-":
//             alert("a-b="+ (a - b));
//             break;
//         case "*":
//             alert("a*b="+ (a * b));
//             break;
//         case "/":
//             alert("a/b="+ (a / b));
//             break;
//         default:
//             alert("Khong co phep toan!");
//             break;
//     }

//
//
// var curDay = new Date();
// var time = curDay.getHours();
// if( time < 10 ){
//     greeting = "Good morning";
// } else if( time < 15 ){
//     greeting = "Good afternoon";
// }else {
//     greeting = "Good evening";
// }
// alert(greeting);


// switch (new Date().getDay()) {
//     case 0:
//         day = "Chủ Nhật";
//         break;
//     case 1:
//         day = "Thứ hai";
//         break;
//     case 2:
//         day = "Thứ ba";
//         break;
//     case 3:
//         day = "Thứ tư";
//         break;
//     case 4:
//         day = "Thứ năm";
//         break;
//     case 5:
//         day = "Thứ sáu";
//         break;
//     case 6:
//         day = "Thứ bảy";
//         break;
// }
// document.write(day);


switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
document.write(text);
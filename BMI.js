let w= document.getElementById("weight ")
let h= document.getElementById("height ")
let message = document.getElementById("message")
let btCheck = document.getElementById("buTon");
btCheck.addEventListener("mousedown", ket_qua);

function ket_qua(){
    let chiSo = ""
    let bmi = w.value / h.value /2
    if (bmi < 18.5) {
        chiSo = "Underweight";
    } else if (bmi < 25) {
        chiSo = "Normal";
    } else if (bmi < 30) {
        chiSo = "Overweight";
    } else {
        chiSo = "Obese";
    }
        message.innerHTML= "Tình trạng của bạn là: " + chiSo +" Với chỉ số BMI: " + bmi
}
function ChangMoney() {
    let Amount = document.getElementById("Amount").value;
    let FC = document.getElementById("FromC").value;
    let TC = document.getElementById("To").value;
    let Result;

    if (FC == "USD" && TC == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FC == "VND" && TC == "USD") {
        Result = "Result: " + (Amount / 23000) + " $";
    }
    else if(FC == "VND") {
        Result = "Result: " + Amount + " Đ" + "\"Mà đổi vậy chi ha\"";
    }
    else {
        Result = "Result: " + Amount + " $" + "\"Mà đổi vậy chi ha\"";
    }
    document.getElementById("Result").innerHTML = Result;
}
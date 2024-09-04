function inputArray() {
    let n = parseInt(prompt("Nhập n là độ dài của mảng!"));
    if (isNaN(n) || n <= 0 || n > 50) {
        alert("Vui lòng nhập 1 số nguyên từ 1 đến 50");
        return;
    }
    let arr = [];
    for (let i = 0; i < n; i++) {
        let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1} là số nguyên`));
        arr.push(element);
    }
    document.write(`Mảng được tạo là arr = [${arr}] <br>`);
    let avg = avgOdd(arr);
    document.write(`Giá trị trung bình là: [${avg}]`);
}
inputArray();

function avgOdd(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            count++;
        }
    }
    if (count > 0) {
        return sum / count;
    } else {
        return 0;
    }
}

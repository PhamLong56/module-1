function averageOddAtEvenIndices(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i += 2) { // Vòng lặp chỉ qua các chỉ số chẵn
        if (arr[i] % 2 !== 0) { // Kiểm tra nếu số là số lẻ
            sum += arr[i];
            count++;
        }
    }

    // Tính trung bình cộng
    return count > 0 ? sum / count : 0; // Trả về 0 nếu không có số lẻ nào ở vị trí chẵn
}

// Hàm nhập mảng từ bàn phím và hiển thị kết quả
function main() {
    // Nhập số lượng phần tử
    let n = parseInt(prompt("Nhập số lượng phần tử của mảng (n <= 50):"));

    // Kiểm tra điều kiện nhập hợp lệ
    if (isNaN(n) || n <= 0 || n > 50) {
        console.log("Số lượng phần tử không hợp lệ!");
        return;
    }

    // Nhập các phần tử của mảng
    let arr = [];
    for (let i = 0; i < n; i++) {
        let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(value);
    }

    // Tính trung bình cộng của các số lẻ ở vị trí chẵn
    let average = averageOddAtEvenIndices(arr);
    console.log(`Trung bình cộng của các số lẻ ở vị trí chẵn là: ${average}`);
}

// Gọi hàm chính
main();
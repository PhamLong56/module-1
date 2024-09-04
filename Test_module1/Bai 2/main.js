function numFriendly(numA, numB) {
    let sumNumA = 0;
    let sumNumB = 0;
    for (let i = 1; i < numA; i++) {
        if (numA % i === 0) {
            sumNumA += i;
        }
    }
    console.log(`Tổng ước của số đầu tiên là: ${sumNumA}`)
    for (let i = 1; i < numB; i++) {
        if (numB % i === 0) {
            sumNumB += i;
        }
    }
    console.log(`Tổng ước của số đầu tiên là: ${sumNumB}`)

    if (sumNumA === numB && sumNumB === numA) {
        return true;
    }
    return false;
}
console.log(numFriendly(220,284));
console.log(numFriendly(123,456));

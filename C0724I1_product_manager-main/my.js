let productList = [
    "Samsung Note 10", "Nokia S21", "Iphone 14 xs", "Xiaomi Note 10"
];


function showListProduct() {
    let text = "";
    productList.forEach((item, index) => {
        text += "<tr>";
                text += "<td>";
                    text += index + 1;
                text += "</td>";
                text += "<td>";
                    text += item;
                text += "</td>";
                text += "<td>";
                    text += `<button onclick="deleteProduct(${index})" class="btn-delete">Delete</button>`;
                    text += `<button onclick="updateProduct(${index})" class="btn-update">Update</button>`;
                text += "</td>";
        text += "</tr>";
    })

    document.getElementById("list-product").innerHTML = text;
}

showListProduct();

function addProduct() {
    let nameProduct = document.getElementById("name-product").value;
    if (nameProduct) {
        productList.push(nameProduct);
        // goi lai ham showListProduct() de hien thi lai d/s
        showListProduct();
        document.getElementById("name-product").value = "";
    } else {
        alert("Please enter product name");
    }
}

function deleteProduct(index) {
    if (confirm("Are you sure you want to delete")) {
        productList.splice(index, 1);
        showListProduct();
    }
}


function updateProduct(index) {

    let product = productList[index];

    document.getElementById("name-product").value = product;

    document.getElementById("id-product").value = index;
}

function editProduct() {
    let index = document.getElementById("id-product").value;
    let nameProduct = document.getElementById("name-product").value;

    productList[index] = nameProduct;

    // goi lai ham showListProduct() de hien thi lai d/s
    showListProduct();
}

// arr = [1,2,4,5]
// arr[1] = 5; // update can 2 yeu to: index vi tri can update, gia tri moi

/*
Nang cao: 1 san pham se co ten san pham, gia tien, so luong san pham
Goi y: Su dung mang 2 chieu
VD:
arr = [
    ["Samsung", 23000, 2],
    ["Nokia", 15000, 3],
    ["Iphone", 100000, 1],
    ["Xiaomi", 5000, 5]
]

 */
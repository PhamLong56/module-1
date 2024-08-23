// tao object tu class Student


// const student1 = new Student("SV01", "Doan van Hau", "hau@gmail.com", "09989890", "C0724G1");
// const student2 = new Student("SV02", "Doan van Nam", "nam@gmail.com", "09989891", "C0724G1");
//
// // goi phuong thuc cua doi tuong object.methodName()
// document.write(student1.displayInfo())
// document.write("<br>")
// document.write(student2.displayInfo())


// tao 1 mang chua danh sach sinh vien
const listStudent = [];


function createStudent(n){
    for (let i = 1; i <= n; i++) {
        let group = "C0724I!"
        if (i % 5 === 0) {
            group = "C0524I1"
        }
        const student = new Student(`SV${i}`, `Sinh vien ${i}`, `sv${i}@gmail.com`, "0989897878", group);
        listStudent.push(student);
    }
}

createStudent(10);


function showListStudent(){
    let html = "";
    listStudent.forEach((student, index) => {
        html += `<tr>`;
        html += `<td>${index + 1}</td>`;
        html += `<td>${student.id}</td>`;
        html += `<td>${student.name}</td>`;
        html += `<td>${student.email}</td>`;
        html += `<td>${student.phone}</td>`;
        html += `<td>${student.group}</td>`;
        html += `<td><button onclick="deleteStudent(${index})">Delete</button></td>`;
        html += `</tr>`;
        html += `</tr>`;
    })

    document.getElementById("list-student").innerHTML = html;
}

showListStudent();

function deleteStudent(index) {
    listStudent.splice(index, 1);
    showListStudent();
}
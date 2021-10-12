function Student(name) {
    this.Name = name;
}

let student1 = new Student("Steve");
let student2 = new Student("Mike");
let student3 = new Student("John");

function ShowStudentNames(a) {
    for (let i = 0; i < Student.length; i++) {
        return a.Name;
    }
}
// console.log(ShowStudentNames(student1));
// console.log(ShowStudentNames(student2));
// console.log(ShowStudentNames(student3));

let arr = [];

console.log(arr.concat(ShowStudentNames(student1), ShowStudentNames(student2), ShowStudentNames(student3)));
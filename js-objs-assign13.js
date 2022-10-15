/* 1. Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce() */

//Input
const arr1=[ 1, 2, 3, 4, 5 ];

//1a

const sumOfAllElements=arr1.reduce((sum,arr)=>{
  return  sum+=arr;
},0)

console.log("1a Sum of all elements in the array: "+sumOfAllElements);

//1b

const avgOfAllElements=(arr1.reduce((sum,arr)=>{
  return  sum+=arr;
},0))/arr1.length;

console.log("1b Average of all elements in the array: "+avgOfAllElements);


/*2. Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display. */

// Input
let students = [
    { name: "John", marks: 92 },
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95},
    { name: "Oscar", marks: 64 },
    { name: "Kevin", marks: 48 },
    ];

// Function to get the grade of students based on marks
function getStudentGrade(marks){
if(marks>90){
    return "A";
}else if(marks>80 && marks<=90){
    return "B";
}else if(marks>70 && marks<=80){
    return "C";
}else if(marks>60 && marks<=70){
    return "D";
}else if(marks>50 && marks<=60){
    return "E";
}else{
    return "F";
}
}


let studentGradesMap=new Map();

// Code to group students according to the grades they have received
students.forEach(student=>{
    const studentGrade=getStudentGrade(student.marks);
    let studentTemp={};
    studentTemp.name=student.name;
    studentTemp.grade=studentGrade;
    if(studentGradesMap.has(studentGrade)){
        studentGradesMap.get(studentGrade).push(studentTemp);
    }else{
        let studentTempArr=[];
        studentTempArr.push(studentTemp);
        studentGradesMap.set(studentGrade,studentTempArr);
    }
});

//Output
console.log("2a Calculating grades on basis of marks & 2b Mapping the grades of each student & 2c Grouping students according to the grades they have received and displaying: ");
console.log(studentGradesMap);
/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];


function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(stud =>{
    if(stud.marks>50){
      console.log(stud);
    }
    return null;
   });
}
// PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(value => 
    {
    if (value.marks > 50) 
    {
      console.log(value);
    }
  });
}
// PrintStudentsbyForEach();

function addData() {
  //Write your code here, just console.log
  let newData= {id:4, 
     name:"Ishaan", 
     age:"23", 
     marks:97};
     arr.push(newData);
    console.log(arr);
  
}
// addData();

function removeFailedStudent() {
  //Write your code here, just console.log
  
  // for(let i=arr.length-1; i>=0; i--){
  //   if(arr[i].marks<50){
  //       arr.splice(i,1);
  //   }
  // }
  //  console.log(arr);
  
  arr= arr.filter(less=> less.marks>=50);
  console.log(arr);

}
// removeFailedStudent();

function concatenateArray() {
  //Write your code here, just console.log
  let newStudents = 
   [
    { id: 4, name: "shubi", age: "22", marks: 95 },
    { id: 5, name: "yogesh", age: "25", marks: 85 },
    { id: 6, name: "bitto", age: "30", marks: 98 }
  ];
  

//  let newArray = arr.concat(newStudents);
  arr=arr.concat(newStudents);
  console.log(arr);

}
// concatenateArray();
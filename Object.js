//how to create a object
//Adding constructor
//how to print the value of object


/*var student=
{ 
    name:"Sijan",
    age:32,
    Address:"UK"

}

document.write(student.age); */



function Student(name,age,cgpa)  //here student is a constructor

{
  this.name=name;
  this.age=age;
  this.cgpa=cgpa;
}

var Student1 = new Student("Sijan",21,3.21);

document.write(Student1.name + "<br>");
document.write(Student1.age + "<br>");
document.write(Student1.cgpa + "<br>");
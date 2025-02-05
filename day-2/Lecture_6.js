// Lecture_6 : 
console.log(" Lecture_6 : Operators in js");

// operators in js

// 1: Arithmethical Operators
console.log("1: Arithmethical Operators");


let x = 25;
let y = 5

console.log("x = ", x)
console.log("y = ", y)
console.log("x + y =", x + y)
console.log("x - y =", x - y)
console.log("x * y =", x * y)
console.log("x / y =", x / y)
console.log("x % y =", x % y, "(modulus)")
console.log("x ** y =", x ** y)

console.log("++x",++x) // 1st add +1 then print
console.log(x)
console.log("x++",x++) // 1st print then add +1
console.log(x)  //value: x=27

console.log("x--",x--) // 1st print then add +1
console.log(x)
console.log("--x",--x) // 1st add +1 then print
console.log(x)

// 2: Assignment Operators
console.log("2: Assignment Operators")

let discount = 25;
discount +=5; // same as discount = 25 + 5
console.log("Now discount is ",discount); //discount ; 30
discount -=10;
console.log("Now discount is ",discount); //discount ; 20

// 3: comperison Operators
console.log("3: comperison Operators")

//same type of variable
let comp1 = 3;
let comp2 = 3;
console.log("comp1 == comp2 : ", comp1 == comp2); 
console.log("comp1 != comp2 : ", comp1 != comp2);
console.log("comp1 === comp2 : ", comp1 === comp2); // type same : tru
console.log("comp1 !== comp2 : ", comp1 !== comp2); 

//diff type of variable
let comp3 = 12;
let comp4 = "kavya";
console.log("comp3 != comp4 : ", comp3 != comp4);
console.log("comp3 == comp4 : ", comp3 == comp4); 
console.log("comp3 === comp4 : ", comp3 === comp4);  // type not same : false
console.log("comp3 !== comp4 : ", comp3 !== comp4);

// 4: Logical Operators
console.log("4: Logical Operators");

let a = 10;
let b = 5;
console.log("logical and : ", a>b && a<b) //false bcz both are not true
console.log("logical or : ", a>b || a<b) //true bcz 1st is true
console.log("logical notf: ", !true) // sign(!) is true + add true : false
console.log("logical not2: ", !false) // sign(!) is true + add false : true


b +=35;
console.log("logical and : ",a<b && a<=b) //true bcz of both are true
console.log("logical and : ",a<b || a<=b) //true bcz of both are true

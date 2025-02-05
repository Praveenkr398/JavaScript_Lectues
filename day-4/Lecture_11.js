// Lecture_11 : function : reuse 

function Mycar(a, b){
    console.log("done")
    return (2 + (a + b)/5)
}

let x = 10;
let y = 50;
let z = 20;

console.log("the values of x and y is ", Mycar(x,y)) // replace x to a & y to b : result: 14
console.log("the values of y and z is ", Mycar(y,z)) // replace y to a & z to b : result: 16
console.log("the values of x and z is ", Mycar(x,z)) // replace x to a & z to b : result: 8

function Mycar(a, b){
    console.log("Next valuse ");
    return (a * b);
    
}

console.log("X * Y = ",Mycar(x , y))
console.log("X * Z = ",Mycar(x , z))
console.log("Y * Z = ",Mycar(y , z))



// practice : 1

function MyResult (a, b){
  
    return(a + b + "%");
}

let _10th = 10;
let _12th = 12;

console.log("10th and 12th result:", MyResult(_10th,_12th))

// practice : 2

function myRespond (){
    console.log("hello! How are you?")
    return("i'm fine")
}

console.log(myRespond())
console.log(myRespond())
console.log(myRespond())

// Practice : 3

function myMoney (a, b){
    console.log("working")
    return ( a * b + 2)
}

let xx = 7;
let yy = 12;
let zz = 5;

console.log("x & y = ", myMoney(xx,yy))
console.log("z & y = ", myMoney(zz,yy))
console.log("x & z = ", myMoney(xx,zz))
// lecture_9 : Loops: for loop

console.log("Lecture_9: For Loop")

// simple for loop
for (i=0; i<5; i++){
    console.log(i+1)
}

// // enter any number 
// console.log("are you agree with this talbe?")

// let n = prompt("write any table ex:5");
// n = Number.parseInt(n)

// for(a=0, a!==n; a<11; a++){
//     console.log(a*n)
// }

// for in and for of loop

console.log("for in/of loop")
let info = {
    praveen : 49,
    radhikha : 29,
    kavya : 99,
    mohit : 39
}

for (let a in info){
    console.log("Student Name: " + a + " & Roll No: " + info[a])
}

for (let b of "kavya"){
    console.log(b)
}



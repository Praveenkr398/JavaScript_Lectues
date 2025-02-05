// Lecture_7 : conditional expression

let age = prompt("Hey! how old are you?")
ag = Number.parseInt(age)

if(age>18 && age<40){
    alert("You are perfect for this Job")
}

else if (age<18){
    alert("You are not aligible for this job")
}

else if (age>40){
    alert("You are too old")
}

else{
    alert("Sorry! you are not able ")
}

// ternary condition 

console.log("Your are" , (age>18? "adult" : "not adult"))
console.log("done")
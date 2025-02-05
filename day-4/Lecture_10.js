// Lecture_10 : while loop

console.log("Lecture_10: while loop")

let n = prompt("enter any number")
let i = 10; // i=10 : means , n>10 value will print
while (i<n){ 
    console.log(i)
    i++; // if enter 10 will not print but 11 valuse will print 10
}


// do while : once print the value then depend on condition

let x = 10;
do {
    console.log(x)
    x++;
}
while(x<10) // x=10 = 10 ; but print 10

let y = 3;
do {
    console.log(y)
    y++;
}
while(y<10) // y=3 < 10 : will print 3 to 9
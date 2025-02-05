// Lecture_4 : Data types

// 1: Primitives (nn bb ss u) 


let a = null;
let b = 45;
let c = true;
let d = BigInt(48) + BigInt(498);
let e = "SuryaVan Singh";
let f = Symbol("i love symbolic text");
let g = undefined;

console.log(a, b, c, d, e, f, g) //print multiple value seprated with comman( , )

console.log(typeof a) // print type of primitive data types
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

// 2: Non-Primitives : objects

const students = {
    "mohit" : "first",
    "danish" : false,
    "kavya" : 420,
    "sumit" : null,
    "kumar" : BigInt(34) + BigInt(44),
}

console.log(students["kavya"])
console.log(students["kumar"])
console.log(students["mohit"])
console.log(students.danish) // 3rd and 4th both are same selector

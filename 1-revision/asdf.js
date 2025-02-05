// day 6 : object and methods

// let myObject = new Object()
// myObject.fName = "Rohan Das";
// myObject.age = 23;
// console.log(myObject)

let logedIn = Symbol("LogedIn")
let user = {
    // key : 'value',
    fName : "Mohan Das",
    salary: '30k',
    from : "delhi",
    log : (logedIn)
}

user.from = ''
user.edu = "degree"
// console.log(user)
// console.log(user.from)
// console.log(user['fName'])
// console.log(user['edu'])
// console.log(user['log'])

// advance

let employee = {
    fName : "Mohan Das",
    salary: '30k',
    from : "delhi",
    skill : {
        structure : 'HTML' ,
        Style : 'CSS', 
        Action : 'Js',
        backEnd : {
            1: 'React.js',
            2:' Node.js',
            3: 'Angular',
        }
    }
}
console.log(employee)

console.log("hellow this is DOM lecture by Apna College")

//print whole document
console.log(window.document); // log : print only element
console.dir(window.document); // dir : print html element properties


console.log(document.head); //print head element only 
console.dir(document.body); //print body element only 






// DoM Manipulation: access the html element

// 1: selecting by "# ID name" // not availbe then : null
let myHeading = document.getElementById("Heading")
console.log("by ID name", myHeading);
// console.dir(myHeading);

// 2: selecting by "# class name" not avaible then : html collection:0
let myClass = document.body.getElementsByClassName("class")
console.log("by Class Name", myClass)
console.dir(myClass)

// 3 : selecting by "Tag Name" / (0)

let myTag = document.getElementsByTagName("p")
console.log("by tag name", myTag);
console.dir(myTag);

// 4 : selecting by querySelector("#id/.class/tag") 
let firstPara = document.querySelector("p") // select only 1st element
console.log("First Element",firstPara);
console.dir(firstPara);


// 5 : selecting by querySelectorAll(".class/tag") // return: NodeLists 
let AllPara = document.querySelectorAll("p") // select only 1st element
console.log("all paragraph " +AllPara);
console.dir(AllPara);





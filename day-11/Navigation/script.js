// Navigation; its nodes: body; dive, h1 etc


let child = document.querySelector("div").children[2];
console.dir(child);

let Fchild = document.querySelector("div").firstChild;
console.dir(Fchild);

let Lchild = document.querySelector("div").lastChild;
console.dir(Lchild);

let schild = document.querySelector("div").nextSibling;
console.dir(schild);


// Node: types
// 1; text nodes
// 2; comment nodes
// 3; element nodes




// tagName : show tag of selected element

let MyNodes  = document.querySelector("body").tagName // return tag name







//  get hmtl content 

// innerText: return only content & its all children
let myText = document.querySelector("div").innerText
console.log("innerText",myText);


// innerHTML: return html tag & content & its all children
let myText2 = document.querySelector("div").innerHTML
console.log("innerHTML", myText2);

// textContent : return content & its all children (also hiddend content)
let myText3 = document.querySelector(".content").textContent
console.log("textContent", myText3);






// set/ change hmtl content 

// innerText: return only content & its all children
let myText11 = document.querySelector("div").innerText = "innerText"
console.log("innerText",myText11);


// innerHTML: return html tag & content & its all children
let myText22 = document.querySelector("span").innerHTML = "<b>Bold Text </b><li>list 1</li><li>list 2</li><li>list 3</li>"

console.log("innerHTML", myText22);

// textContent : return content & its all children (also hiddend content)
let myText33 = document.querySelector("h6").textContent = "Text Content"
console.log("textContent", myText33);

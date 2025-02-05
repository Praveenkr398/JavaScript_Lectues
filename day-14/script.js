let title = document.getElementById("collection");
title.style.color = "red";

title.style.fontFamily = "verdana";

let list1 = document.querySelectorAll("li");
list1[0].style.background = "blue";
list1[1].style.background = "red";
list1[2].style.background = "green";
list1[3].style.background = "purple";
list1[4].style.background = "pink";

let finder = document.getElementById("collection")
console.log(finder.style.background = "blue")
console.log(finder.matches(".newBox")) // true : bcz availble
console.log(finder.matches(".Box")) // false : bcz   not availble


let head1 = document.getElementsByTagName("h1")


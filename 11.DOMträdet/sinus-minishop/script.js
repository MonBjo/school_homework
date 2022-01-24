console.log(document.getElementsByClassName("art-1")[0].getElementsByTagName("h3")[0].innerText = "Potato");

console.log(document.getElementsByTagName("nav")[0].getElementsByTagName("a")[0].innerText = "Start");
console.log(document.getElementsByTagName("footer")[0].getElementsByTagName("article")[0].getElementsByTagName("a")[0].innerText = "Start");

console.log(document.getElementsByTagName("nav")[0].getElementsByTagName("a")[2].innerText = "Mail us");
console.log(document.getElementsByTagName("footer")[0].getElementsByTagName("article")[0].getElementsByTagName("a")[2].innerText = "Mail us");

console.log(document.getElementsByClassName("art-2")[0].getElementsByTagName("h2")[0].innerText = "Sinus Jacket");
console.log(document.getElementsByClassName("art-2")[0].getElementsByTagName("h3")[0].innerText = "Lava");

console.log(document.getElementsByClassName("art-1")[0].getElementsByTagName("button")[0].innerText = "Get me");
console.log(document.getElementsByClassName("art-1")[0].getElementsByTagName("button")[0].style.backgroundColor = "gray");

console.log(document.getElementsByClassName("art-3")[0].style.backgroundColor = "yellow");

console.log(document.getElementsByTagName("footer")[0].getElementsByTagName("article")[1].getElementsByTagName("p")[0].innerHTML = "Sinus Skateboards<br>Storgatan 58G<br>430 12, Hoppstropp");

let paragraphs = document.getElementsByTagName("p");
for(let paragraph of paragraphs){
    console.log(paragraph.style.backgroundColor = "lightblue");
}

dom

 document.body.style.background="green"
 document.body.childNodes[1].innerText=""
 let button = document.getElementById("#btn")
 console.log(button)


 const allE = document.querySelectorAll("p")
 console.dir(allE)


const list = document.getElementById("list");
console.log(list.lastElementChild.textContent);

const list = document.getElementById("list")
console.log(list.TEXT_NODE)
console.log(list.COMMENT_NODE)
logs "First (1)"


document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true

let div = document.querySelector("div")
console.log(div)

let h2 = document.querySelector("h2")
console.dir(h2.innerText)
h2.innerText = innerText + "from apna collage"


let divs = document.querySelectorAll(".box")
let idx = 1;
for (div of divs){
    div.innerText = `the value of ${idx}`;
    idx++
}

let div = document.querySelector("div")
console.log(div)

let id = div.getAttribute("id")
console.log(id)


let para = document.querySelector("p")
console.log(para.setAttribute("class", "newClass"))

let btn = document.createElement("button")
btn.innerText = "click me!"
console.log(btn)

let div = document.querySelector("div")
div.append(btn)

let heading = document.createElement("h1")
heading.innerHTML = " my name is amit"
document.querySelector("body").prepend(heading)
// heading.remove()
console.log(heading)

let  list = document.getElementById("list")
list.removeChild(list.firstElementChild) 
let addList  =  document.getElementById("list")
list.appendChild(list.firstElementChild)

let node = document.createElement("li")

const textNode = document.createTextNode("water")

node.appendChild(textNode)
document.getElementById("myList")
appendChild(node)

let button = document.createElement("button")

button.innerText ="click me";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button)

// 2

let para = document.querySelector("p")













console.log(document.body)
console.log(document.body.children[0])
const div1=document.body.children[0];
console.log(div1.parentElement===document.body)

const div12=document.createElement("div")
div12.innerText='div1.2';
div1.appendChild(div12)

const div11=div1.children[0];
// div11.remove()

const other_div1=document.body.querySelector("div");
console.log(other_div1===div1)

console.log(document.body.querySelectorAll("div"));

console.log(document.body.querySelector(".post"))
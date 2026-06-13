//var is fn scoped can redeclare
//let is bloc scoped
var s = 12;
var s = 21
let city = "chennai";
//let city = "ch"; throws error.
console.log(city);
let num = 23
let isVote = true
let dec = 3.5;
let name = "Varsh";
const pi = 3.14;
let arr = [1,2,3,4,5];
document.write(arr + "<br>");
    
// for(let i=0;i<arr.length;i++){ 
arr.push(7) //like append insert at end
arr.unshift(8) // insert at begin
arr.pop()
arr.shift();
for(i of arr){
   i*=2;
    document.write(i+" ");
}
document.write("<br>");
document.write("Fn:");
function display(arr){
    for(i of arr){
   i*=2;
    document.write(i+" ");
}
}
document.write("<br>");
let a = 5;
let b = 10;
document.write("Fn:add");
function add(a,b){
    return a+b;
}
document.write(add(a,b));

display(arr);
document.write("<br>");
let q = ()=>{
    document.write("hell0");
}
q();
document.write("<br>");
let d = (a,b)=>{
    return(a+b)
}
document.write(d(a,b));
let student = {
    name: "Varsh",
    age: 19,
    city: "Chennai",
    mark:{
        phy:99,
        chem:100,
        Math:100
   }
};
document.write(student.name);
document.write(student.mark.phy);
document.write(student["mark"]["chem"]);
document.write(JSON.stringify(student));

// let dis = ()=>{
//     let num = document.getElementById("inp").value.trim();
//     document.getElementById("res").innerHTML = num;
// }

let add1= ()=>{
    let num1 = parseInt(document.getElementById("inp1").value.trim());
    let num2 = parseInt(document.getElementById("inp2").value.trim());
    document.getElementById("res").innerHTML = num1 + num2;
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
    
    
}
function showText(){
    let txt = document.getElementById("sh").value;
    document.getElementById("res").textContent = txt;
}
let sub= ()=>{
    let num1 = parseInt(document.getElementById("inp1").value.trim());
    let num2 = parseInt(document.getElementById("inp2").value.trim());
    document.getElementById("res").innerHTML = num1 - num2;
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
}
let mul= ()=>{
    let num1 = parseInt(document.getElementById("inp1").value.trim());
    let num2 = parseInt(document.getElementById("inp2").value.trim());
    document.getElementById("res").innerHTML = num1 * num2;
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
}

// console.log(arr);
// console.log(num);
// console.log(isVote);
// console.log(dec);
// console.log(name);
// console.log(pi)
// console.log(s);
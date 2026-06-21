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
const input = document.getElementById("input");
const output = document.getElementById("res");
input.addEventListener("input",()=>{
    output.textContent=input.value;
})
document.write(arr + "<br>");


const sec = document.createElement("h1")
sec.textContent = "SAM"
document.body.appendChild(sec)
sec.remove()




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
let div= ()=>{
    let num1 = parseInt(document.getElementById("inp1").value.trim());
    let num2 = parseInt(document.getElementById("inp2").value.trim());
    document.getElementById("res").innerHTML = num1 / num2;
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
}
let eg=()=>{
    console.log("HELLO");
}
// console.log(arr);
// console.log(num);
// console.log(isVote);
// console.log(dec);
// console.log(name);
// console.log(pi)
// console.log(s);


// promise:
// 1.pending
// 2.success
// 3.failure




//to change branch - git checkout varsh
//or git switch varsh

//Syn
console.log("SAM--");
//Asyn
setTimeout(()=>{             //setTimeout => go into queue so in queue ,which has less time will execute first.
    console.log("B");
},2000) //2000ms = 2sec
//Sync
setTimeout(()=>{
    console.log("DDDD");
})
console.log("C");
const promise = new Promise((resolve,reject)=>{
    const success = true;
    if(success){
        console.log("Done");
    }
    else{
        console.log("Fail");
    }
})
promise.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})

const promise = new Promise((resolve,reject)=>{
    const success = true;

    if(success){
        resolve("Done");
    }
    else{
        reject("Fail");
    }
})
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
});
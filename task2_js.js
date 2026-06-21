let p = document.getElementById("par");
let table = document.getElementById("ta");


        
function func(){
    
    p.innerHTML="Loading..." 
    setTimeout(()=>{
    while(table.rows.length > 1)
{
    table.deleteRow(1);
}
     datafetch();
    },2000);
}
function datafetch(){
    fetch("https://jsonplaceholder.typicode.com/users",{
        method : "GET",
    }
    )
.then(response => response.json())
.then( data => show(data))
.then(()=>{p.innerHTML="Loaded Suceessfully"});
}
function show( data ){

let row1 = document.createElement("tr");
let h1 = document.createElement("td");
let h2 = document.createElement("td");
let h3 = document.createElement("td");
    h1.innerHTML = "UserName";
    h2.innerHTML = "UserEmail";
    h3.innerHTML = "UserPhone Number";
    row1.appendChild(h1);
    row1.appendChild(h2);
    row1.appendChild(h3);

    table.appendChild(row1);
   for(let user of data)
{
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let phoneCell = document.createElement("td");

    nameCell.innerHTML = user.name;
    emailCell.innerHTML = user.email;
    phoneCell.innerHTML = user.phone;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);

    table.appendChild(row);
}
}
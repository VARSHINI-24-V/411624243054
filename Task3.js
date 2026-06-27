
let inpu = document.getElementById("inp")
let count =document.getElementById("c")
let addBtn = document.getElementById("btn")
let clearBtn =document.getElementById("clear")
let disp=document.getElementById("dis")
let status = document.getElementById("status")

let msg_arr = [];
inpu.addEventListener("input", () => {
count.textContent = inpu.value.length;
});
addBtn.addEventListener("click", () => {

    let msg = inpu.value;

    let promise = new Promise((resolve, reject) => {
        if (msg.length >= 3) {
            resolve();
        } else {
            reject();
        }
    });

    promise
        .then(() => {
            show(msg);
        })
        .catch(() => {
            status.textContent = "Message must contain at least 3 characters";
        });

});
function show(msg) {
    status.textContent = "Message Added Successfully";
   
    msg_arr.push(msg);
    disp.innerHTML = "";
    msg_arr.forEach((item) => {
        let p = document.createElement("p");
        p.textContent = item;
        disp.appendChild(p);

    });
   setTimeout(() => {
    msg_arr.pop();
    disp.innerHTML = "";
    msg_arr.forEach((item) => {
        let p = document.createElement("p");
        p.textContent = item;
        disp.appendChild(p);
    });
    status.textContent = "Message Expired";
}, 10000);
}
clearBtn.addEventListener("click", () => {

   msg_arr.length = 0;

    disp.textContent=""

  status.textContent = "All Messages Cleared"

});
let students=[]
function Attach(student)
{
    students.push(student)
}

function Detach(student)
{
    let newStudent=[]
    for(let i of student)
    {
        if(i!=student)
        {
            newStudent.push(i);
        }
    }
    students=newStudent
}

function notify(message) {
    for(let i of students) {
        console.log(i + ": "+message)
    }
}
Attach("Varsh");
Attach("Sam");
Attach("Vish");

notify("Holiday");
notify("Exam tomorrow");
notify("Festa");


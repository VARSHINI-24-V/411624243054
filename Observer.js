let observers=[]
function Attach(observer)
{
    observers.push(observer)
}
function Detach(observer)
{
    let newObservers=[]
    for(let i of observers)
    {
        if(i!=observer)
        {
            newObservers.push(i);
        }
    }
    observers=newObservers
}

function notify() {
    for(let i of observers) {
        console.log(i + ": Notified")
    }
}

Attach("A")
Attach("B")
notify()
Attach("C")
Detach("B")
notify()
import { useState, useEffect } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(()=>{console.log(count)},[count])

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

// let count = 0;

// export default function Counter() {

//     function inc() {
//         count++;
//         document.getElementById("count").textContent = count;
//     }

//     function dec() {
//         count--;
//         document.getElementById("count").textContent = count;
//     }

//     function reset() {
//         count = 0;
//         document.getElementById("count").textContent = count;
//     }

//     return (
//         <>
//             <h1>
//                 Count : <span id="count">0</span>
//             </h1>

//             <button onClick={inc}>Increment</button> <br></br> <br></br>
//             <button onClick={dec}>Decrement</button> <br></br> <br></br>
//             <button onClick={reset}>Reset</button> <br></br> <br></br>
//         </>
//     );
// }
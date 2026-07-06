let count = 0;

export default function Counter() {

    function inc() {
        count++;
        document.getElementById("count").textContent = count;
    }

    function dec() {
        count--;
        document.getElementById("count").textContent = count;
    }

    function reset() {
        count = 0;
        document.getElementById("count").textContent = count;
    }

    return (
        <>
            <h1>
                Count : <span id="count">0</span>
            </h1>

            <button onClick={inc}>Increment</button> <br></br> <br></br>
            <button onClick={dec}>Decrement</button> <br></br> <br></br>
            <button onClick={reset}>Reset</button> <br></br> <br></br>
        </>
    );
}
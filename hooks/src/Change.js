import { useState } from "react";

export default function Change() {

    const [c, setC] = useState("white");

    function red() {
        setC("red");
    }

    function blue() {
        setC("blue");
    }

    function green() {
        setC("green");
    }

    return (
        <div
            style={{
                backgroundColor: c,
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
            }}
        >
            <button onClick={red}>RED</button>
            <button onClick={blue}>BLUE</button>
            <button onClick={green}>GREEN</button>
        </div>
    );
}
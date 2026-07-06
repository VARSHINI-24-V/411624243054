let color = ["green", "red", "pink"];
let k = 0;

function Color() {

    function change() {  //e
        k = (k + 1) % color.length;
        document.body.style.backgroundColor = color[k];
        //  e.target.style.backgroundColor = color[k];
    }

    return (
        <>
            <button onClick={change}>
                Change Background
            </button>
        </>
    );
}

export default Color;
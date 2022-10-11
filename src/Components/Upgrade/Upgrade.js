

export default function Upgrade( charState, setCharState ) {
    function changeCharState(e) {
        charState = e;
        console.log(e)
    }
    return (
    <div>
        <button onMouseDown={() => changeCharState(true)} onMouseUp={() => changeCharState(false)}>Upgrade</button>
    </div>
)}
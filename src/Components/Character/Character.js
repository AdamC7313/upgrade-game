import { useEffect } from "react"

export default function Character(update, setCharState) {

    function togglePicture() {
        if(update === true) {
            return <img src={require("../../Media/basic_char_upgrade.png")} height="200px" width="75px" />
        } else {
            return <img src={require("../../Media/basic_char.png")} height="200px" width="75px" />
        }
    }

    return (
        <div>
            <div>{togglePicture()}</div>
        </div>
    )
}
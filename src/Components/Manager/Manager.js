import React, { useState } from 'react';

export default function Manager(props) {
    const [managers, setManagers] = useState([])
    const [managerCost, setManagerCost] = useState(100)

    function addManager() {
        let newManager = {
            multiplier: 1
        }
        setManagers(prevManagers => {
           return [...prevManagers, newManager]
        },
        console.log(managers)
        )
    }
    function managerCostIncrement() {
        setManagerCost(prevCost => {
            return prevCost * 2;
        },
        console.log(managerCost))
    }


    return <button onClick={() => { addManager(); managerCostIncrement()}}>Add Manager (${managerCost})</button>
}
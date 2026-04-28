import React from 'react'
import './Toggleswitch.css'
import { useState } from 'react'
const Toggleswitch = () => {
    const [isOn, SetIson] = useState(false);
    const handleToggleSwitch = () => {
        SetIson(!isOn);
    }
    return (
        <>
            <div className='flex justify-center text-2xl mt-5 text-black'>Toggleswitch Mine-Project</div>
            <div className="toggle-switch"
                style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
                onClick={handleToggleSwitch}>
                <div className={`switch ${isOn ? "on" : "off"}`}>
                    <span className="switch-state">{isOn ? "on" : "off"}</span>
                </div>
            </div>
        </>

    )
}

export default Toggleswitch
import React, { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
    console.log("Navbar is rendered");
    return (
        <nav>
            I am a {adjective} navbar
            <button onClick={() => getAdjective()}>{getAdjective()}</button>
        </nav>
    )
}

export default memo(Navbar)

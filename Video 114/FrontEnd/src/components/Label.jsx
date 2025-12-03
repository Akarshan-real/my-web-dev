import React, { useRef, useState, useEffect } from 'react'
import './Label.css'

const Label = () => {
    const [val, setVal] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const inputBox = useRef(null);

    const handelAdd = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
        setVal('');
    }

    return (
        <div className='flex items-center gap-5 w-fit'>
            {showPopup && <div className='popUp mid'>Data Added</div>}
            <form onSubmit={handelAdd} className={`holder mid ${val.length > 0 ? 'locked' : ''}`} id='inputHolder'>
                <input className=''
                    ref={inputBox} placeholder=' ' value={val} type="text" name="todoAddBox" id="todoA" onChange={(e) => setVal(e.target.value)} />
                <label className='cool'
                    htmlFor="todoA">Enter What To Do 😎</label>
            </form>
            <button type='submit' className='mid labelButton' form='inputHolder'><span className='mid labelSpan'>Add</span></button>
        </div>
    )
}

export default Label

import React, { useState, useRef , useEffect} from "react"

const Todo = ({ info }) => {

    const [check, setCheck] = useState(false);
    const inputRef = useRef(null);

    useEffect(()=> {
        if (check) {
            inputRef.current.focus();
        }
        else {
            inputRef.current.blur();
        }
    },[check]);

    return (
        <div 
        className='flex justify-between items-center w-full'>
            <div 
            className={`flex justify-center items-center gap-2 cursor-pointer px-4 py-2`} onClick={() => setCheck(x => !x)}>
                <input ref={inputRef} type="checkbox" checked={check} name="todo-select" onClick={(e) => e.stopPropagation()} onChange={() => setCheck(x => !x)} 
                className="mid scale-125 cursor-pointer" />
                <span onCopy={(e) => e.preventDefault()}
                className={`transition-all duration-200 ease-in-out ${check ? "opacity-100 scale-100" : "opacity-50 scale-90"}`}>
                {check ? "Checked" : "Check"}</span>
            </div>
            <span 
            className={`transition-all duration-200 ease-in-out ${check ? "text-[1.2rem]" : "text-[1rem]"}`}>{info.todo}</span>
        </div>
    )
}

export default Todo

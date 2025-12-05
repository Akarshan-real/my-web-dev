import React, { useState, useRef, useEffect } from "react"
import './Todo.css'

const Todo = ({ info, show , isChecked , onCheckChange , index}) => {

    const [check, setCheck] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (show && inputRef.current) {
            if (isChecked) {
                inputRef.current.focus();
            }
            else {
                inputRef.current.blur();
            }
        }
    }, [isChecked, show]);
    

    return (
        <div className='outerTodo'>
            <span
                className={`todoInfoBox ${isChecked ? "checked" : "unchecked"}`}
            >   
                {info}
            </span>

            <div
                className={`todoCheckBoxContainer ${show ? "show" : ""}`}
                onClick={() => setCheck(x => !x)}
                onChange={() => onCheckChange(index)}
            >
                <input
                    ref={inputRef}
                    type="checkbox"
                    checked={check}
                    name="todo-select"
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => {setCheck(x => !x);onCheckChange(index)}}
                    className={`todoCheckbox`}
                />
                <span
                    onCopy={(e) => e.preventDefault()}
                    className={`todoChecked ${isChecked ? "checked" : "unchecked"}`}
                >
                    {isChecked ? "Checked" : "Check"}
                </span>
            </div>

        </div>
    )
}

export default Todo

import React, { useState, useRef, useEffect } from "react"
import './Todo.css'

const Todo = ({ info, show }) => {
    // show is false by default and when it turns turns i want to move indo.todo from left to right and make todoCheckBoxContainer appear from opacity 0 to 1

    const [check, setCheck] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (show && inputRef.current) {
            if (check) {
                inputRef.current.focus();
            }
            else {
                inputRef.current.blur();
            }
        }
        else {
            setCheck(false);
        }
    }, [check, show]);

    return (
        <div className='outerTodo'>
            <span
                className={`todoInfoBox ${check ? "checked" : "unchecked"}`}
            >
                {info.todo}
            </span>

            <div
                className={`todoCheckBoxContainer ${show ? "show" : ""}`}
                onClick={() => setCheck(x => !x)}
            >
                <input
                    ref={inputRef}
                    type="checkbox"
                    checked={check}
                    name="todo-select"
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => setCheck(x => !x)}
                    className={`todoCheckbox`}
                />
                <span
                    onCopy={(e) => e.preventDefault()}
                    className={`todoChecked ${check ? "checked" : "unchecked"}`}
                >
                    {check ? "Checked" : "Check"}
                </span>
            </div>

        </div>
    )
}

export default Todo

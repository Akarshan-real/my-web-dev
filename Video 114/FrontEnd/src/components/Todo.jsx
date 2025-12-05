import React, { useState, useRef, useEffect } from "react"
import './Todo.css'

const Todo = ({ info, show, onCheckChange, index, editing }) => {

    const [check, setCheck] = useState(false);
    const [reverseEditing, setReverseEditing] = useState(editing);
    const inputRef = useRef(null);
    const editRef = useRef(null);
    const [val, setVal] = useState('');

    const checkBoxHandler = () => {

        document.querySelector(".todoChecked");
    };

    useEffect(() => {
        setReverseEditing(x => !x);
        if (editing) {
            editRef.current.value = info;
            editRef.current.focus();
        }
    }, [editing])


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
                className={`todoInfoBox ${check ? "checked" : "unchecked"} relative flex-1`}>

                <form className={`absolute left-0 w-full h-full ${editing ? "flex flex-wrap" : "hidden"}`}>
                    <input className={`w-full`} type="text" ref={editRef} name="editingText" id="editingTextInput" placeholder={`${val}`} onChange={(e) => setVal(e.target.value)} />
                </form>

                <span className={`${editing ? "opacity-0 pointer-events-none" : "opacity-100 "}`}>
                    {info}
                </span>
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
                    onChange={() => { setCheck(x => !x); onCheckChange(index) }}
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

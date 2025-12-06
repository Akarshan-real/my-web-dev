import React, { useState, useRef, useEffect } from "react"
import './Todo.css'

const Todo = ({ info, show, onCheckChange, index, isEditing, setEditValue, isSelected }) => {

    const [check, setCheck] = useState(false);
    const inputRef = useRef(null);
    const editRef = useRef(null);
    const [val, setVal] = useState(info);

    useEffect(() => {
        if (isEditing) {
            editRef.current.value = info;
            editRef.current.focus();
        }
    }, [isEditing, info])

    useEffect(() => {
        if (show) {
            if (isSelected) {
                inputRef.current.focus();
            } else {
                inputRef.current.blur();
            }
        }
    }, [isSelected, show]);


    return (
        <div className='outerTodo'>
            <span
                className={`todoInfoBox ${isSelected ? "checked" : "unchecked"} relative flex-1 h-full`}>

                <form 
                    onSubmit={(e) => {e.preventDefault();setEditValue(val)}} 
                    
                    className={`absolute left-0 w-full h-full ${isEditing ? "flex flex-wrap" : "hidden"}`}>
                    <input 
                        autoComplete="off" 
                        className={`w-full`} 
                        type="text" 
                        ref={editRef} 
                        name="editingText" 
                        id="editingTextInput" 
                        placeholder={`${val}`}
                        onChange={(e) => {setVal(e.target.value);setEditValue(e.target.value)}} />
                </form>

                <span className={`${isEditing ? "opacity-0 pointer-events-none" : "opacity-100 "}`}>
                    {info}
                </span>
            </span>

            <div
                className={`todoCheckBoxContainer ${show ? "show" : ""}`}
                onClick={() => {setCheck(prev => !prev);onCheckChange(index)}}
            >
                <input
                    ref={inputRef}
                    type="checkbox"
                    checked={check}
                    name="todo-select"
                    onClick={(e) => e.stopPropagation()}
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

import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const List = ({ text, index, onDelete }) => {
    const [completed, setCompleted] = useState(false);
    return (
        <li className={completed ? "completed" : ""} onClick={() => {
            setCompleted(!completed);
        }} onContextMenu={(e) => {
            e.preventDefault();
            onDelete(index);
        }}>{text}</li>
    )
}

const Container = ({ className }) => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const mount = useRef();
    const onDelete = (i) => {
        let items = [...list];
        items.splice(i, 1);
        setList(items);
    }

    useEffect(() => {
        if (!mount.current) {
            mount.current = true;
            let Storage = localStorage.getItem("TodoList");
            if (Storage)
                setList(JSON.parse(Storage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(list));
    }, [list]);

    return (
        <div className={className}>
            <h1>todos</h1>
            <div className="form">
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Enter your todo"
                    autoComplete="off"
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13 && value.length > 0) {
                            let item = [...list];
                            item.push(value);
                            setList(item);
                            setValue("");
                        }
                    }}
                />

                <ul className="todos">
                    {
                        list.map((text, i) => {
                            return <List key={i} text={text} index={i} onDelete={onDelete} />
                        })
                    }
                </ul>
            </div>
            <small>Left click to toggle completed. <br /> Right click to delete todo</small>
        </div>
    )
}

const TodoList = styled(Container)`
    & {
        background-color: #f5f5f5;
        color: #444;
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
        overflow-y: auto;
        padding-bottom: 3rem;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    
    h1 {
        color: rgb(179, 131, 226);
        font-size: 10rem;
        text-align: center;
        opacity: 0.4;
    }
    
    .form {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 100%;
        width: 400px;
    }
    
    .input {
        border: none;
        color: #444;
        font-size: 2rem;
        padding: 1rem 2rem;
        display: block;
        width: 100%;
    }
    
    .input::placeholder {
        color: #d5d5d5;
    }
    
    .input:focus {
        outline-color: rgb(179, 131, 226);
    }
    
    .todos {
        background-color: #fff;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    
    .todos li {
        border-top: 1px solid #e5e5e5;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 1rem 2rem;
    }
    
    .todos li.completed {
        color: #b6b6b6;
        text-decoration: line-through;
    }
    
    small {
        color: #b5b5b5;
        margin-top: 3rem;
        text-align: center;
    }  
`

export default TodoList

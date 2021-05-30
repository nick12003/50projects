import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const Note = ({ content, index, contentChange, contentDelete }) => {
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (!content)
            setEdit(true);
    }, [content]);

    return (
        <div className="note">
            <div className="tools">
                <button className="edit" onClick={() => {
                    setEdit(!edit);
                }}>
                    <i className="fas fa-edit"></i>
                </button>
                <button className="delete" onClick={() => {
                    contentDelete(index);
                }}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
            <div className={`main ${edit ? "hidden" : ""}`}><p>{content}</p>
            </div>
            <textarea value={content} className={!edit ? "hidden" : ""} onChange={(e) => {
                contentChange(e.target.value, index);
            }}></textarea>
        </div>
    )
}

const Container = ({ className }) => {
    const [notes, setNotes] = useState([]);
    const mount = useRef();
    const contentChange = (content, i) => {
        let items = [...notes];
        items[i].content = content;
        setNotes(items);
    }

    const contentDelete = (i) => {
        let items = [...notes];
        items.splice(i, 1);
        setNotes(items);
    }

    useEffect(() => {
        if (!mount.current) {
            mount.current = true;
            let Storage = localStorage.getItem("NotesApps");
            if (Storage)
                setNotes(JSON.parse(Storage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("NotesApps", JSON.stringify(notes));
    }, [notes]);

    return (
        <div className={className}>
            <button className="add" onClick={() => {
                setNotes([...notes, { content: "" }]);
            }}>
                <i className="fas fa-plus"></i> Add note
            </button>
            {
                notes.map(({ content }, i) => {
                    return <Note
                        key={i}
                        index={i}
                        content={content}
                        contentChange={contentChange}
                        contentDelete={contentDelete} />
                })
            }
        </div>
    )
}

const NotesApp = styled(Container)`
    & {
        background-color: #7bdaf3;
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-wrap: wrap;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
        padding-top: 3rem;
        overflow: hidden;
        overflow-y: auto;
    }

    & * {
        outline: none;
    }
    
    &::-webkit-scrollbar, .note::-webkit-scrollbar {
        display: none;
    }

    .add {
        position: fixed;
        top: calc(1rem + 80px);
        right: 1rem;
        background-color: #9ec862;
        color: #fff;
        border: none;
        border-radius: 3px;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    
    .add:active {
        transform: scale(0.98);
    }
    
    .note {
        background-color: #fff;
        box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
        margin: 30px 20px;
        height: 400px;
        width: 400px;
    }
    
    .note .tools {
        background-color: #9ec862;
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem;
    }
    
    .note .tools button {
        background-color: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 1rem;
        margin-left: 0.5rem;
    }
    
    .note textarea {
        outline: none;
        font-family: inherit;
        font-size: 1.2rem;
        border: none;
        height: 400px;
        width: 100%;
        padding: 20px;
    }
    
    .main {
        padding: 20px;
    }

    .main p {
        white-space: pre-wrap;
    }
    
    .hidden {
        display: none;
    }
`

export default NotesApp

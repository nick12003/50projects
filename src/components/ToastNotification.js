import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [toasts, setToasts] = useState([]);
    const messages = [
        'Message One',
        'Message Two',
        'Message Three',
        'Message Four',
    ];
    const types = ['info', 'success', 'error'];

    const getRandomMessage = () => {
        return messages[Math.floor(Math.random() * messages.length)]
    }

    const getRandomType = () => {
        return types[Math.floor(Math.random() * types.length)]
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (toasts.length) {
                console.log("enter");
                let items = [...toasts]
                items.splice(0, 1);
                setToasts(items);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [toasts]);

    return (
        <div className={className}>
            <div className="toasts">
                {
                    toasts.map(({ type, message }, i) => {
                        return <div key={i} className={`toast ${type}`}>{message}</div>
                    })
                }
            </div>
            <button className="btn" onClick={() => {
                let items = [...toasts];
                items.push({ type: getRandomType(), message: getRandomMessage() });
                setToasts(items);
            }}>
                Show Notification
            </button>
        </div>
    )
}

const ToastNotification = styled(Container)`
    & {
        background-color: rebeccapurple;
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .btn {
        background-color: #ffffff;
        color: rebeccapurple;
        font-family: inherit;
        font-weight: bold;
        padding: 1rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
    
    .btn:focus {
        outline: none;
    }
    
    .btn:active {
        transform: scale(0.98);
    }
    
    .toasts {
        position: fixed;
        bottom: 10px;
        right: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    
    .toast {
        background-color: #fff;
        border-radius: 5px;
        padding: 1rem 2rem;
        margin: 0.5rem;
    }
    
    .toast.info {
        color: rebeccapurple;
    }
    
    .toast.success {
        color: green;
    }
    
    .toast.error {
        color: red;
    }
`

export default ToastNotification

import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [stretch, setStretch] = useState(false);
    const input = useRef();

    useEffect(() => {
        if (stretch)
            input.current.focus();
    }, [stretch]);

    return (
        <div className={className}>
            <div className={`search ${stretch ? "active" : ""}`}>
                <input type="text" className="input" placeholder="Search..." ref={input} />
                <button className="btn" onClick={() => {
                    setStretch(!stretch);
                }}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

const HiddenSearchWidget = styled(Container)`
    * {
        box-sizing: border-box;
    }
    
    & {
        background-image: linear-gradient(90deg, #7d5fff, #7158e2);
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .search {
        position: relative;
        height: 50px;
    }
    
    .search .input {
        background-color: #fff;
        border: 0;
        font-size: 18px;
        padding: 15px;
        height: 50px;
        width: 50px;
        transition: width 0.3s ease;
    }
    
    .btn {
        background-color: #fff;
        border: 0;
        cursor: pointer;
        font-size: 24px;
        position: absolute;
        top: 0;
        left: 0;
        height: 50px;
        width: 50px;
        transition: transform 0.3s ease;
    }
    
    .btn:focus,
    .input:focus {
        outline: none;
    }
    
    .search.active .input {
        width: 200px;
    }
    
    .search.active .btn {
        transform: translateX(198px);
    }
`

export default HiddenSearchWidget

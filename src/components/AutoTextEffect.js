import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const resource = "看好了世界，台灣只示範一次，一個禮拜停電兩次!";
    const timer = useRef();
    const [speed, setSpeed] = useState(1);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        timer.current = setInterval(() => {
            if (index + 1 > resource.length) {
                setIndex(1);
            } else {
                setIndex(index + 1);
            }
        }, (1000 / speed));
        return () => {
            clearInterval(timer.current);
        };
    }, [index, speed]);
    return (
        <div className={className}>
            <h1>{resource.slice(0, index)}</h1>
            <div>
                <label htmlFor="speed">Speed:</label>
                <input
                    id="speed"
                    type="number"
                    name="speed"
                    value={speed}
                    min="1"
                    max="10"
                    step="1" onChange={(e) => {
                        setSpeed(e.target.value);
                    }} />
            </div>
        </div>
    )
}

const AutoTextEffect = styled(Container)`
    & {
        background-color: darksalmon;
        font-family: 'Roboto', sans-serif;
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
    
    div {
        position: absolute;
        bottom: 20px;
        background: rgba(0, 0, 0, 0.1);
        padding: 10px 20px;
        font-size: 18px;
    }
    
    input {
        width: 50px;
        padding: 5px;
        font-size: 18px;
        background-color: darksalmon;
        border: none;
        text-align: center;
    }
    
    input:focus {
        outline: none;
    }
`

export default AutoTextEffect

import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [circleTop, setCircleTop] = useState(0);
    const [circleLeft, setCircleLeft] = useState(0);
    const [circle, setCircle] = useState(false);

    const Ripple = () => {
        setCircle(true);
        setTimeout(() => {
            setCircle(false);
        }, 500);
    }
    return (
        <div className={className}>
            <button className="ripple" onClick={(e) => {
                setCircleLeft(e.clientX - e.target.offsetLeft);
                setCircleTop(e.clientY - 80 - e.target.offsetTop);
                Ripple();
            }}>
                Click Me
                <span className={circle ? "circle" : ""} style={{
                    top: `${circleTop}px`,
                    left: `${circleLeft}px`
                }}></span>
            </button>
        </div>
    )
}

const ButtonRippleEffect = styled(Container)`
    & {
        background-color: #000;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
    }
    
    button {
        background-color: purple;
        color: #fff;
        border: 1px purple solid;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 20px 30px;
        margin: 10px 0;
        position: relative;
        overflow: hidden;
    }
    
    button:focus {
        outline: none;
    }
    
    button .circle {
        position: absolute;
        background-color: #fff;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: scale 0.5s ease-out;
    }
    
    @keyframes scale {
        to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
`

export default ButtonRippleEffect

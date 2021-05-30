import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    return (
        <div className={className}>
            <div className={`container ${left ? "hover-left" : ""} ${right ? "hover-right" : ""}`}>
                <div className="split left" onMouseEnter={() => {
                    setLeft(true);
                }} onMouseLeave={() => {
                    setLeft(false);
                }}>
                    <h1>Playstation 5</h1>
                    <span href="#" className="btn">Buy Now</span>
                </div>
                <div className="split right" onMouseEnter={() => {
                    setRight(true);
                }} onMouseLeave={() => {
                    setRight(false);
                }}>
                    <h1>XBox Series X</h1>
                    <span href="#" className="btn">Buy Now</span>
                </div>
            </div>
        </div>
    )
}

const SplitLandingPage = styled(Container)`
    & {
        font-family: 'Roboto', sans-serif;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    h1 {
        font-size: 4rem;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        white-space: nowrap;
    }
    
    .btn {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 50%;
        top: 40%;
        transform: translateX(-50%);
        text-decoration: none;
        color: #fff;
        border: #fff solid 0.2rem;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        width: 15rem;
        padding: 1.5rem;
        cursor: pointer;
    }
    
    .split.left .btn:hover {
        background-color: rgba(87, 84, 236, 0.7);
        border-color: rgba(87, 84, 236, 0.7);
    }
    
    .split.right .btn:hover {
        background-color: rgba(28, 122, 28, 1);
        border-color: rgba(28, 122, 28, 1);
    }
    
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        background: #333;
    }
    
    .split {
        position: absolute;
        width: 50%;
        height: 100%;
        overflow: hidden;
    }
    
    .split.left {
        left: 0;
        background: url('https://50projects50days.com/projects/split-landing-page/ps.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .split.left::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--left-bg-color);
    }
    
    .split.right {
        right: 0;
        background: url('https://50projects50days.com/projects/split-landing-page/xbox.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .split.right::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(43, 43, 43, 0.8);
    }
    
    .split.right,
    .split.left,
    .split.right::before,
    .split.left::before {
        transition: all 1000ms ease-in-out;
    }
    
    .hover-left .left {
        width: 75%;
    }
    
    .hover-left .right {
        width: 25%;
    }
    
    .hover-right .right {
        width: 75%;
    }
    
    .hover-right .left {
        width: 25%;
    }
    
    

    @media (max-width: 576px) {
        h1 {
            font-size: 1.2rem;
            top: 30%;
        }
    
        .btn {
            font-size: 0.8rem;
            padding: 1.2rem;
            width: 8rem;
        }
    }
`

export default SplitLandingPage

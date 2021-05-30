import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [finish, setFinish] = useState(true);
    const [numbers, setNumbers] = useState(Array(4).fill(""));

    const setAnimate = (index, type) => {
        let items = [...numbers];
        items[index] = type;
        setNumbers(items);
    }
    const start = (i) => {
        if (i < 0) {
            setFinish(true);
            return;
        }
        setFinish(false);
        setAnimate(i, "in");
        setTimeout(() => {
            start(i - 1);
        }, 1000);
    }

    return (
        <div className={className}>
            <div className={`counter ${finish ? "hide" : ""}`}>
                <div className="nums">
                    {
                        numbers.map((num, i) => {
                            return <span key={i} className={num}
                                onAnimationEnd={(e) => {
                                    if (e.animationName === "goIn") {
                                        setAnimate(i, "out");
                                    }
                                }}>{i}</span>
                        })
                    }
                </div>
                <h4>Get Ready</h4>
            </div>
            <div className={`final ${finish ? "show" : ""}`}>
                <h1>GO</h1>
                <button onClick={() => {
                    start(numbers.length - 1);
                }}>Replay</button>
            </div>
        </div>
    )
}

const AnimatedCountdown = styled(Container)`
    & {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
    }
    
    h4 {
        font-size: 20px;
        margin: 5px;
        text-transform: uppercase;
    }
    
    .counter {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    
    .counter.hide {
        transform: translate(-50%, -50%) scale(0);
        animation: hide 0.2s ease-out;
    }
    
    @keyframes hide {
        0% {
        transform: translate(-50%, -50%) scale(1);
        }
    
        100% {
        transform: translate(-50%, -50%) scale(0);
        }
    }
    
    .final {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        text-align: center;
    }
    
    .final.show {
        transform: translate(-50%, -50%) scale(1);
        animation: show 0.2s ease-out;
    }
    
    @keyframes show {
        0% {
        transform: translate(-50%, -50%) scale(0);
        }
    
        30% {
        transform: translate(-50%, -50%) scale(1.4);
        }
    
        100% {
        transform: translate(-50%, -50%) scale(1);
        }
    }
    
    .nums {
        color: #3498db;
        font-size: 50px;
        position: relative;
        overflow: hidden;
        width: 250px;
        height: 50px;
    }
    
    .nums span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(120deg);
        transform-origin: bottom center;
    }
    
    .nums span.in {
        transform: translate(-50%, -50%) rotate(0deg);
        animation: goIn 0.5s ease-in-out;
    }
    
    .nums span.out {
        animation: goOut 0.5s ease-in-out;
    }
    
    @keyframes goIn {
        0% {
        transform: translate(-50%, -50%) rotate(120deg);
        }
    
        30% {
        transform: translate(-50%, -50%) rotate(-20deg);
        }
    
        60% {
        transform: translate(-50%, -50%) rotate(10deg);
        }
    
        100% {
        transform: translate(-50%, -50%) rotate(0deg);
        }
    }
    
    @keyframes goOut {
        0% {
        transform: translate(-50%, -50%) rotate(0deg);
        }
    
        60% {
        transform: translate(-50%, -50%) rotate(20deg);
        }
    
        100% {
        transform: translate(-50%, -50%) rotate(-120deg);
        }
    }
`

export default AnimatedCountdown

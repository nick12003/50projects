import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const boxs = Array(4).fill(Array(4).fill());
    const [active, setActive] = useState(false);
    return (
        <div className={className}>
            <button className="magic" onClick={() => {
                setActive(!active)
            }}
            >Magic 🎩</button>
            <div className={`boxes ${active ? "" : "big"}`}>
                {
                    boxs.map((row, i) => {
                        return (<div className="row">
                            {
                                row.map((box, j) => {
                                    return <div key={j} className="box" style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}></div>
                                })
                            }
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

const ThreeDBackgroundBoxes = styled(Container)`
    & {
        background-color: #fafafa;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
    }
    
    .magic {
        background-color: #f9ca24;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        border: 0;
        border-radius: 3px;
        font-size: 16px;
        padding: 12px 20px;
        cursor: pointer;
        position: absolute;
        top: 20px;
        letter-spacing: 1px;
        box-shadow: 0 3px rgba(249, 202, 36, 0.5);
        z-index: 100;
    }
    
    .magic:focus {
        outline: none;
    }
    
    .magic:active {
        box-shadow: none;
        transform: translateY(2px);
    }
    
    .boxes {
        display: flex;
        flex-wrap: wrap;
        height: 500px;
        width: 500px;
        position: relative;
        transition: 0.4s ease;
    }
    
    .boxes.big {
        width: 600px;
        height: 600px;
    }
    
    .boxes.big .box {
        transform: rotateZ(360deg);
    }

    .row{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    
    .box {
        background-image: url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif');
        background-repeat: no-repeat;
        background-size: 500px 500px;
        position: relative;
        height: 125px;
        width: 125px;
        transition: 0.4s ease;
    }
    
    .box::after {
        content: '';
        background-color: #f6e58d;
        position: absolute;
        top: 8px;
        right: -15px;
        height: 100%;
        width: 15px;
        transform: skewY(45deg);
    }
    
    .box::before {
        content: '';
        background-color: #f9ca24;
        position: absolute;
        bottom: -15px;
        left: 8px;
        height: 15px;
        width: 100%;
        transform: skewX(45deg);
    }
`

export default ThreeDBackgroundBoxes

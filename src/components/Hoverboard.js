import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [squares, setSquares] = useState(Array(500).fill());
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <div className={className}>
            <div className="container">
                {
                    squares.map((square, i) => {
                        return <div key={i} className="square" style={square ? {
                            backgroundColor: getRandomColor()
                        } : {}}
                            onMouseOver={(e) => {
                                let items = [...squares];
                                items[i] = true;
                                setSquares(items);
                            }}
                            onMouseOut={(e) => {
                                let items = [...squares];
                                items[i] = false;
                                setSquares(items);
                            }}
                        ></div>
                    })
                }
            </div>
        </div>
    )
}

const Hoverboard = styled(Container)`
    & {
        background-color: #111;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 400px;
    }
    
    .square {
        background-color: #1d1d1d;
        box-shadow: 0 0 2px #000;
        height: 16px;
        width: 16px;
        margin: 2px;
        transition: 2s ease;
    }
    
    .square:hover {
        transition-duration: 0s;
    }
`

export default Hoverboard

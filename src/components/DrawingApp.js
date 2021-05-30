import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const useRWD = () => {
    const [device, setDevice] = useState("mobile");
    const handleRWD = () => {
        if (window.innerWidth > 850)
            setDevice("PC");
        else if (window.innerWidth > 550)
            setDevice("tablet");
        else
            setDevice("mobile");
    }
    useEffect(() => {
        window.addEventListener('resize', handleRWD);
        handleRWD();
        return (() => {
            window.removeEventListener('resize', handleRWD);
        })
    }, []);
    return device;
}

const Container = ({ className }) => {
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(10);
    const [width, setW] = useState(0);
    const [height, setH] = useState(0);
    const canvasRef = useRef();
    const context = useRef();
    const [pressed, setPressed] = useState(false);
    const [offsetX, setOffsetX] = useState(undefined);
    const [offsetY, setOffsetY] = useState(undefined);

    const drawCircle = (x, y) => {
        context.current.beginPath();
        context.current.arc(x, y, size, 0, Math.PI * 2);
        context.current.fillStyle = color;
        context.current.fill();
    }

    const drawLine = (x1, y1, x2, y2) => {
        context.current.beginPath();
        context.current.moveTo(x1, y1);
        context.current.lineTo(x2, y2);
        context.current.strokeStyle = color;
        context.current.lineWidth = size * 2;
        context.current.stroke();
    }

    const drawClear = () => {
        context.current.clearRect(0, 0, width, height);
    }

    const device = useRWD();
    useEffect(() => {
        switch (device) {
            case "PC":
                setW(800);
                setH(600);
                break;
            case "tablet":
                setW(500);
                setH(600);
                break;
            case "mobile":
                setW(300);
                setH(400);
                break;
            default:
                break;
        }
    }, [device]);
    useEffect(() => {
        context.current = canvasRef.current.getContext('2d');
    }, []);
    return (
        <div className={className}>
            <canvas ref={canvasRef} width={width} height={height}
                onMouseDown={(e) => {
                    setPressed(true);
                    let x = e.clientX - e.target.offsetLeft;
                    let y = e.clientY - 80 - e.target.offsetTop;
                    setOffsetX(x);
                    setOffsetY(y);
                }}
                onMouseUp={(e) => {
                    setPressed(false);
                    setOffsetX(undefined);
                    setOffsetY(undefined);
                }}
                onMouseMove={(e) => {
                    if (pressed) {
                        let x2 = e.clientX - e.target.offsetLeft;
                        let y2 = e.clientY - 80 - e.target.offsetTop;
                        drawCircle(x2, y2);
                        drawLine(offsetX, offsetY, x2, y2);
                        setOffsetX(x2);
                        setOffsetY(y2);
                    }
                }} />
            <div className="toolbox" style={{ width: width + "px" }}>
                <button onClick={() => {
                    if (size > 5)
                        setSize(size - 5);
                }}>-</button>
                <span>{size}</span>
                <button onClick={() => {
                    if (size < 50)
                        setSize(size + 5);
                }}>+</button>
                <input type="color" value={color} onChange={(e) => {
                    setColor(e.target.value);
                }} />
                <button onClick={drawClear}>X</button>
            </div>
        </div>
    )
}

const DrawingApp = styled(Container)`
    & {
        background-color: #f5f5f5;
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
    
    canvas {
        border: 2px solid steelblue;
    }
    
    .toolbox {
        background-color: steelblue;
        border: 1px solid slateblue;
        display: flex;
        padding: 1rem;
        justify-content: space-around;
    }
    
    .toolbox > * {
        background-color: #fff;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: 0.5rem;
        padding: 0.2rem;
        height: 2.5rem;
        width: 2.5rem;
    }

    .toolbox > *:last-child {
        margin-left: auto;
    }
`

export default DrawingApp

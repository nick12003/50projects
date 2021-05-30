import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "Saturday"];
    const h_total = 24 * 60 * 60;
    const m_total = 60 * 60;
    const s_total = 60;
    const [mode, setMode] = useState(true);
    const [now, setNow] = useState(new Date());
    const timer = useRef();

    const getDeg = (type) => {
        const hours = now.getHours();
        const hoursForClock = hours >= 13 ? hours % 12 : hours;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        switch (type) {
            case "h":
                return (hoursForClock * 60 * 60 + minutes * 60 + seconds) / h_total * 360;
            case "m":
                return (minutes * 60 + seconds) / m_total * 360;
            case "s":
                return seconds / s_total * 360;
            default:
                return 0;
        }
    }

    const padL = (str) => {
        return str.toString().padStart(2, '0');
    }

    const getTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${padL(minutes)}:${padL(seconds)}`;
    }

    const getDate = (time) => {
        const year = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
        return `${year} - ${padL(month + 1)} - ${padL(date)} ${days[day]}`;
    }

    useEffect(() => {
        timer.current = setInterval(() => { setNow(new Date()) }, 1000);
        return () => {
            clearInterval(timer.current);
        };
    }, []);

    return (
        <div className={className + (mode ? "" : " dark")}>
            <button className="toggle" onClick={() => {
                setMode(!mode);
            }}>
                {mode ? "Dark mode" : "Light mode"}
            </button>
            <div className="clock-container">
                <div className="clock">
                    <div className="needle hour" style={{ transform: `translate(-50%, -100%) rotate(${getDeg("h")}deg)` }}></div>
                    <div className="needle minute" style={{ transform: `translate(-50%, -100%) rotate(${getDeg("m")}deg)` }}></div>
                    <div className="needle second" style={{ transform: `translate(-50%, -100%) rotate(${getDeg("s")}deg)` }}></div>
                    <div className="center-point"></div>
                </div>

                <div className="time">
                    {getTime(now)}
                </div>
                <div className="date">
                    {getDate(now)}
                </div>
            </div>
        </div>
    )
}

const ThemeClock = styled(Container)`
    --primary-color: #000;
    --secondary-color: #fff;

    & {
        font-family: 'Heebo', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
        transition: all 0.5s ease-in;
    }

    &.dark {
        background-color: #111;
        color: var(--secondary-color);
    }
    
    .toggle {
        cursor: pointer;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: 0;
        border-radius: 4px;
        padding: 8px 12px;
        position: absolute;
        top: 100px;
    }

    &.dark .toggle {
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }
    
    .toggle:focus {
        outline: none;
    }
    
    .clock-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .clock {
        position: relative;
        width: 200px;
        height: 200px;
    }
    
    .needle {
        background-color: var(--primary-color);
        position: absolute;
        top: 50%;
        left: 50%;
        height: 65px;
        width: 3px;
        transform-origin: bottom center;
        transition: all 0.5s ease-in;
    }

    &.dark .needle {
        background-color: var(--secondary-color);
    }
    
    .needle.hour {
        transform: translate(-50%, -100%) rotate(0deg);
    }
    
    .needle.minute {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 100px;
    }
    
    .needle.second {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 100px;
        background-color: #e74c3c;
    }
    
    .center-point {
        background-color: #e74c3c;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    
    .center-point::after {
        content: '';
        background-color: var(--primary-color);
        width: 5px;
        height: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    &.dark .center-point::after {
        background-color: var(--secondary-color);
    }
    
    .time {
        font-size: 60px;
    }
    
    .date {
        color: #aaa;
        font-size: 14px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
    }
`

export default ThemeClock

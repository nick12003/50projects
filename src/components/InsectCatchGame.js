import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const useTimer = (isStart) => {
    const [sec, setSec] = useState(0);
    const timer = useRef();
    timer.current = () => {
        setSec(sec + 1);
    };

    useEffect(() => {
        if (isStart) {
            const id = setInterval(() => {
                timer.current();
            }, 1000);
            return () => {
                clearInterval(id);
            };
        }
    }, [isStart]);

    return sec;
}

const Container = ({ className }) => {
    const [start, setStart] = useState(false);
    const insectTypes = [
        { name: "Fly", img: "fly/fly_PNG3946.png" },
        { name: "Mosquito", img: "mosquito/mosquito_PNG18175.png" },
        { name: "Spider", img: "spider/spider_PNG12.png" },
        { name: "Roach", img: "roach/roach_PNG12163.png" },
    ];
    const [insect, setInsect] = useState("");
    const [insectImg, setInsectImg] = useState("");
    const [insects, setInsects] = useState([]);
    const [score, setScore] = useState(0);
    const second = useTimer(insect ? true : false);
    const timeFormat = (sec) => {
        let m = Math.floor(sec / 60);
        let s = sec - (m * 60);

        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
    }

    const createInsect = () => {
        let items = [...insects];
        items.push({ ...getRandomLocation() });
        setInsects(items);
    }

    const deleteInsect = (index) => {
        let items = [...insects];
        items.splice(index, 1);
        setInsects(items);

        setTimeout(() => {
            createInsect();
        }, 1500);

        setTimeout(() => {
            createInsect();
        }, 2000);
    }

    const getRandomLocation = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        const x = Math.random() * (width - 200)
        const y = Math.random() * (height - 200)
        return { x, y }
    }

    return (
        <div className={className}>
            <div className={`screen ${start ? "up" : ""}`}>
                <h1>Catch The Insect</h1>
                <button className="btn" onClick={() => {
                    setStart(true);
                }}>Play Game</button>
            </div>

            <div className={`screen ${insect ? "up" : ""}`}>
                <h1>What is your "favorite" insect?</h1>
                <ul className="insects-list">
                    {
                        insectTypes.map(({ name, img }, i) => {
                            return <li key={i}>
                                <button className="choose-insect-btn" onClick={() => {
                                    setInsect(name);
                                    setInsectImg(`http://pngimg.com/uploads/${img}`);
                                    setScore(score + 1);
                                    createInsect();
                                }}>
                                    <p>{name}</p>
                                    <img src={`http://pngimg.com/uploads/${img}`} alt={name.toLowerCase()} />
                                </button>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="screen game-container" id="game-container">
                <h3 id="time" className="time">Time: {timeFormat(second)}</h3>
                <h3 id="score" className="score">Score: {score}</h3>
                <h5 className={`message ${score > 15 ? "visible" : ""}`}>
                    Are you annnoyed yet? <br />
                    You are playing an impossible game!!
                </h5>
                {
                    insects.map(({ x, y }, i) => {
                        return <div
                            key={i}
                            className="insect"
                            style={{ top: `${y}px`, left: `${x}px` }}
                            onClick={() => {
                                console.log(`click ${i}`);
                                deleteInsect(i);
                            }}>
                            <img src={insectImg} alt={insect.toLowerCase()} style={{ transform: `rotate(${Math.random() * 360}deg)` }} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

const InsectCatchGame = styled(Container)`
    & {
        background-color: #516dff;
        color: #fff;
        font-family: 'Press Start 2P', sans-serif;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
        text-align: center;
    }

    a {
        color: #fff;
    }
    
    h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        line-height: 1.4;
    }

    .btn {
        border: 0;
        background-color: #fff;
        color: #516dff;
        padding: 15px 20px;
        font-family: inherit;
        cursor: pointer;
    }
    
    .btn:hover {
        opacity: 0.9;
    }
    
    .btn:focus {
        outline: 0;
    }
    
    .screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        transition: margin 0.5s ease-out;
    }
    
    .screen.up {
        margin-top: -100vh;
    }
    
    .insects-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        padding: 0;
    }
    
    .insects-list li {
        margin: 10px;
    }
    
    .choose-insect-btn {
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
        cursor: pointer;
        font-family: inherit;
        width: 150px;
        height: 150px;
    }
    
    .choose-insect-btn:hover {
        background-color: #fff;
        color: #516dff;
    }
    
    .choose-insect-btn:active {
        background-color: rgba(255, 255, 255, 0.7);
    }
    
    .choose-insect-btn img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
    
    .game-container {
        position: relative;
    }
    
    .time,
    .score {
        position: absolute;
        top: 20px;
    }
    
    .time {
        left: 20px;
    }
    
    .score {
        right: 20px;
    }
    
    .message {
        line-height: 1.7;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        padding: 20px;
        z-index: 100;
        text-align: center;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -150%);
        transition: transform 0.4s ease-in;
    }
    
    .message.visible {
        transform: translate(-50%, 150%);
        opacity: 1;
    }
    
    .insect {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        position: absolute;
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.3s ease-in-out;
    }
    
    .insect.caught {
        transform: translate(-50%, -50%) scale(0);
    }
    
    .insect img {
        width: 100px;
        height: 100px;
    }
`

export default InsectCatchGame

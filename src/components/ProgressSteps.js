import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [currentActive, setCurrentActive] = useState(0);
    const [prevDisable, setPrevDisable] = useState(false);
    const [nextDisable, setNextDisable] = useState(false);
    const [progress, setProgress] = useState("0");

    const onPrev = (e) => {
        if (currentActive > 0)
            setCurrentActive(currentActive - 1);
    }

    const onNext = (e) => {
        if (currentActive < 3)
            setCurrentActive(currentActive + 1);
    }

    useEffect(() => {
        if (currentActive === 0) {
            setPrevDisable(true);
        } else {
            setPrevDisable(false);
        }
        if (currentActive === 3) {
            setNextDisable(true);
        } else {
            setNextDisable(false);
        }
        setProgress(currentActive / 3 * 100);
    }, [currentActive]);

    return (
        <div className={className}>
            <div className="container">
                <div className="progress-container">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                    {
                        Array(4).fill().map((v, i) => i).map(i => {
                            return <div key={i} className={`circle ${currentActive >= i ? "active" : ""}`}>
                                {i + 1}
                            </div>
                        })
                    }
                </div>

                <button className="btn" onClick={onPrev} disabled={prevDisable}>
                    Prev
                </button>
                <button className="btn" onClick={onNext} disabled={nextDisable}>
                    Next
                </button>
            </div>
        </div>
    )
}

const ProgressSteps = styled(Container)`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    * {
        box-sizing: border-box;
    }

    & {
        background-color: #f6f7fb;
        font-family: 'Muli', sans-serif;
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
        text-align: center;
    }

    .progress-container {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-bottom: 30px;
        max-width: 100%;
        width: 350px;
    }

    .progress-container::before {
        content: '';
        background-color: #e0e0e0;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 4px;
        width: 100%;
    }

    .progress {
        background-color: #3498db;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 4px;
        width: 0%;
        transition: 0.4s ease;
    }

    .circle {
        background-color: #fff;
        color: #999;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #e0e0e0;
        transition: 0.4s ease;
        z-index: 1;
    }

    .circle.active {
        border-color: #3498db;
    }

    .btn {
        background-color: #3498db;
        color: #fff;
        border: 0;
        border-radius: 6px;
        cursor: pointer;
        font-family: inherit;
        padding: 8px 30px;
        margin: 5px;
        font-size: 14px;
    }

    .btn:active {
        transform: scale(0.98);
    }

    .btn:focus {
        outline: 0;
    }

    .btn:disabled {
        background-color: #e0e0e0;
        cursor: not-allowed;
    }
`

export default ProgressSteps;

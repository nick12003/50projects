import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [cups, setCups] = useState(Array(8).fill().map(i => { return { full: false } }))
    const [percent, setPercent] = useState(0);
    return (
        <div className={className}>
            <h1>Drink Water</h1>
            <h3>Goal: 2 Liters</h3>

            <div className="cup">
                {
                    percent === 8 ? "" : <div className="remained" style={{
                        visibility: `${percent === 8 ? "hidden" : "visible"}`
                    }}>
                        <span>{2 - (percent * 250) / 1000}L</span>
                        <small>Remained</small>
                    </div>
                }
                <div className="percentage" style={{
                    visibility: `${percent === 0 ? "hidden" : "visible"}`,
                    height: `${percent / 8 * 100}%`
                }}>
                    {`${percent / 8 * 100}%`}
                </div>
            </div>
            <p className="text">Select how many glasses of water that you have drank</p>
            <div className="cups">
                {
                    cups.map(({ full }, i) => {
                        return <div
                            key={i}
                            className={`cup cup-small ${full ? "full" : ""}`}
                            onClick={() => {
                                let copyCups = [...cups];
                                setCups(copyCups.map((cup, j) => {
                                    if (j === i && cup.full && i === percent - 1) {
                                        return { full: false }
                                    }
                                    if (j <= i)
                                        return { full: true };
                                    else
                                        return { full: false }
                                }));
                                if (i + 1 === percent)
                                    setPercent(i)
                                else
                                    setPercent(i + 1)
                            }}>
                            250 ml
                        </div>
                    })
                }
            </div>
        </div>
    )
}

const DrinkWater = styled(Container)`
    & {
        background-color: #3494e4;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
    }
    
    h1 {
        margin: 10px 0 0;
    }
    
    h3 {
        font-weight: 400;
        margin: 10px 0;
    }
    
    .cup {
        background-color: #fff;
        border: 4px solid #144fc6;
        color: #144fc6;
        border-radius: 0 0 40px 40px;
        height: 330px;
        width: 150px;
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    
    .cup.cup-small {
        height: 95px;
        width: 50px;
        border-radius: 0 0 15px 15px;
        background-color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 5px;
        transition: 0.3s ease;
    }
    
    .cup.cup-small.full {
        background-color: #6ab3f8;
        color: #fff;
    }
    
    .cups {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 280px;
    }
    
    .remained {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 1;
        transition: 0.3s ease;
    }
    
    .remained span {
        font-size: 20px;
        font-weight: bold;
    }
    
    .remained small {
        font-size: 12px;
    }
    
    .percentage {
        background-color: #6ab3f8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 30px;
        height: 0;
        transition: 0.3s ease;
    }
    
    .text {
        text-align: center;
        margin: 0 0 5px;
    }
  
`

export default DrinkWater

import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [joke, setJoke] = useState("Joke goes here");

    async function generateJoke() {
        const res = await fetch('https://icanhazdadjoke.com', {
            method: "GET",
            headers: {
                Accept: 'application/json',
            }
        });

        const data = await res.json()
        setJoke(data.joke);
    }

    useEffect(() => {
        generateJoke();
    }, []);

    return (
        <div className={className}>
            <div className="container">
                <h3>Don't Laugh Challenge</h3>
                <div className="joke">{joke}</div>
                <button className="btn" onClick={generateJoke}>
                    Get Another Joke
                </button>
            </div>
        </div>
    )
}

const DadJokes = styled(Container)`
    & {
        background-color: #686de0;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
        padding: 20px;
    }
    
    .container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
        padding: 50px 20px;
        text-align: center;
        max-width: 100%;
        width: 800px;
    }
    
    h3 {
        margin: 0;
        opacity: 0.5;
        letter-spacing: 2px;
    }
    
    .joke {
        font-size: 30px;
        letter-spacing: 1px;
        line-height: 40px;
        margin: 50px auto;
        max-width: 600px;
    }
    
    .btn {
        background-color: #9f68e0;
        color: #fff;
        border: 0;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
        padding: 14px 40px;
        font-size: 16px;
        cursor: pointer;
    }
    
    .btn:active {
        transform: scale(0.98);
    }
    
    .btn:focus {
        outline: 0;
    }
`

export default DadJokes

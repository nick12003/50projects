import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [textarea, setTextarea] = useState("");
    const [diable, setDiable] = useState(false);
    const [tags, setTags] = useState([]);

    useEffect(() => {

    }, []);
    return (
        <div className={className}>
            <div className="container">
                <h3>Enter all of the choices divided by a comma (','). <br /> Press enter when you're done</h3>
                <textarea
                    placeholder="Enter choices here..."
                    value={textarea}
                    disabled={diable}
                    onChange={(e) => {
                        setTextarea(e.target.value);
                        setTags(e.target.value.split(',').filter(tag => tag.trim() !== '').map(tag => { return { tag: tag.trim(), highlight: false } }));
                    }} onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            setDiable(true);
                            const times = 30
                            const interval = setInterval(() => {
                                const randomTag = Math.floor(Math.random() * tags.length);
                                let arr = [...tags];
                                arr[randomTag].highlight = true;
                                setTags(arr);

                                setTimeout(() => {
                                    arr[randomTag].highlight = false;
                                    setTags(arr);
                                }, 100)
                            }, 100);

                            setTimeout(() => {
                                clearInterval(interval)
                                setTimeout(() => {
                                    const randomTag = Math.floor(Math.random() * tags.length);
                                    let arr = [...tags];
                                    arr[randomTag].highlight = true;
                                    setTags(arr);
                                    setDiable(false);
                                    setTextarea("");
                                }, 100)

                            }, times * 100);
                        }
                    }}></textarea>
                <div>
                    {
                        tags.map(({ tag, highlight }, i) => {
                            return <span key={i} className={`tag ${highlight ? "highlight" : ""}`}>{tag}</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const RandomChoicePicker = styled(Container)`
    & {
        background-color: #2b88f0;
        font-family: 'Muli', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    h3 {
        color: #fff;
        margin: 10px 0 20px;
        text-align: center;
    }
    
    .container {
        width: 500px;
    }
    
    textarea {
        border: none;
        display: block;
        width: 100%;
        height: 100px;
        font-family: inherit;
        padding: 10px;
        margin: 0 0 20px;
        font-size: 16px;
    }
    
    .tag {
        background-color: #f0932b;
        color: #fff;
        border-radius: 50px;
        padding: 10px 20px;
        margin: 0 5px 10px 0;
        font-size: 14px;
        display: inline-block;
    }
    
    .tag.highlight {
        background-color: #273c75;
    }

    @media (max-width: 576px) {
        .container {
            width: 300px;
        }
    }
`

export default RandomChoicePicker

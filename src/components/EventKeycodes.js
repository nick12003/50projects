import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [keyDown, setKeyDown] = useState(false);
    const [key, setKey] = useState("");
    const [keyCode, setKeyCode] = useState("");
    const [code, setCode] = useState("");
    const onKeyDown = (e) => {
        setKeyDown(true);
        setKey(e.key);
        setKeyCode(e.keyCode);
        setCode(e.code);
    }
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [])
    return (
        <div className={className}>
            <div id="insert">
                {
                    !keyDown ? <div className="key">
                        Press any key to get the keyCode
                    </div> : <>
                        <div className="key">
                            {key}
                            <small>event.key</small>
                        </div>
                        <div className="key">
                            {keyCode}
                            <small>event.keyCode</small>
                        </div>
                        <div className="key">
                            {code}
                            <small>event.code</small>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

const EventKeycodes = styled(Container)`
    & {
        background-color: #e1e1e1;
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .key {
        border: 1px solid #999;
        background-color: #eee;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        display: inline-flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        padding: 20px;
        flex-direction: column;
        margin: 10px;
        min-width: 150px;
        position: relative;
    }
    
    .key small {
        position: absolute;
        top: -24px;
        left: 0;
        text-align: center;
        width: 100%;
        color: #555;
        font-size: 14px;
    }
`

export default EventKeycodes

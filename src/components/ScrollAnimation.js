import React, { useState, useRef, useEffect, createRef } from 'react'
import styled from 'styled-components';

const useRWD = () => {
    const [device, setDevice] = useState("mobile");
    const handleRWD = () => {
        if (window.innerWidth > 768)
            setDevice("PC");
        else if (window.innerWidth > 576)
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
    const device = useRWD();
    const bodyRef = useRef();
    const [boxs, setBoxs] = useState(Array(10).fill().map(i => createRef()));
    const [getting, setGetting] = useState(false);
    useEffect(() => {
        let body = bodyRef.current;
        let checkBoxes = () => {
            let ch = body.clientHeight;
            const triggerBottom = ch + 80 - (device === "mobile" ? 100 : 200);
            boxs.forEach(({ current: box }, i) => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < triggerBottom) {
                    box.classList.add('show');
                } else {
                    box.classList.remove('show');
                }
            });
            let st = body.scrollTop;
            let sh = body.scrollHeight;
            if (st > (sh - ch - 100) && !getting) {
                setGetting(true);
                setTimeout(() => {
                    setBoxs([...boxs, ...Array(5).fill().map(i => createRef())]);
                    setGetting(false);
                }, 1);
            }
        }
        checkBoxes();

        body.addEventListener('scroll', checkBoxes);
        return () => {
            body.removeEventListener('scroll', checkBoxes);
        }
    }, [device, boxs, getting]);
    return (
        <div id="body" className={className} ref={bodyRef}>
            <h1>Scroll to see the animation {device}</h1>
            {
                boxs.map((current, i) => {
                    return <div key={i} className="box show" ref={current}>
                        <h2>Content</h2>
                    </div>
                })
            }
        </div>
    )
}

const ProgressSteps = styled(Container)`
    & {
        background-color: #efedd6;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
    }

    h1 {
        margin: 10px;
    }
    
    .box {
        background-color: steelblue;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        flex: 0 0 200px;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
        transform: translateX(400%);
        transition: transform 0.4s ease;
    }

    .box:nth-of-type(even) {
        transform: translateX(-400%);
    }
    
    .box.show {
        transform: translateX(0);
    }
    
    .box h2 {
        font-size: 45px;
    }

    @media (max-width: 576px) {
        h1{
            font-size: 25px;
        }
        .box h2 {
            font-size: 20px;
        }
        .box {
            width: 200px;
            flex: 0 0 100px;
            margin: 10px;
        }
    }
`

export default ProgressSteps

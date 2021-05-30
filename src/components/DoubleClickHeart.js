import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [count, setCount] = useState(0);
    const [heartTop, setHeartTop] = useState(0);
    const [heartLeft, setHeartLeft] = useState(0);
    const [heart, setHeart] = useState(false);

    const beat = () => {
        setHeart(true);
        setTimeout(() => {
            setHeart(false);
        }, 500);
    }

    return (
        <div className={className}>
            <h3>Double click on the image to <i className="fas fa-heart"></i> it
            </h3>
            <small>You liked it <span id="times">
                {
                    count
                }
            </span> times
            </small>

            <div className="loveMe" onDoubleClick={(e) => {
                setCount(count + 1);
                setHeartLeft(e.clientX - e.target.offsetLeft);
                setHeartTop(e.clientY - 160 - e.target.offsetTop);
                beat();
            }}>
                <i className={`fas ${heart ? "fa-heart" : ""}`} style={{
                    top: `${heartTop}px`,
                    left: `${heartLeft}px`
                }}></i>
            </div>
        </div>
    )
}

const DoubleClickHeart = styled(Container)`
    & {
        font-family: 'Oswald', sans-serif;
        text-align: center;
        overflow: hidden;
        position: relative;
        top: 160px;
        margin: 0;
    }
    
    h3 {
        margin-bottom: 0;
        text-align: center;
    }
    
    small {
        display: block;
        margin-bottom: 20px;
        text-align: center;
    }
    
    .fa-heart {
        color: red;
    }
    
    .loveMe {
        height: 440px;
        width: 300px;
        background: url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
        no-repeat center center/cover;
        margin: auto;
        cursor: pointer;
        max-width: 100%;
        position: relative;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    
    .loveMe .fa-heart {
        position: absolute;
        animation: grow 0.6s linear;
        transform: translate(-50%, -50%) scale(0);
    }
    
    @keyframes grow {
        to {
        transform: translate(-50%, -50%) scale(10);
        opacity: 0;
        }
    }
`

export default DoubleClickHeart

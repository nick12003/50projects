import React from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    return (
        <div className={className}>
            <div className="kinetic"></div>
        </div>
    )
}

const KineticLoader = styled(Container)`
    & {
        background-color: #2c3e50;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .kinetic {
        position: relative;
        height: 80px;
        width: 80px;
    }
    
    .kinetic::after,
    .kinetic::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-bottom-color: #fff;
        animation: rotateA 2s linear infinite 0.5s;
    }
    
    .kinetic::before {
        transform: rotate(90deg);
        animation: rotateB 2s linear infinite;
    }
    
    @keyframes rotateA {
        0%,
        25% {
        transform: rotate(0deg);
        }
    
        50%,
        75% {
        transform: rotate(180deg);
        }
    
        100% {
        transform: rotate(360deg);
        }
    }
    
    @keyframes rotateB {
        0%,
        25% {
        transform: rotate(90deg);
        }
    
        50%,
        75% {
        transform: rotate(270deg);
        }
    
        100% {
        transform: rotate(450deg);
        }
    }
`

export default KineticLoader

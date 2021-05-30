import React, { useState } from 'react'
import styled from 'styled-components';

const Image = ({ title, backgroundUrl, active, onClick }) => {
    return (
        <div
            className={`panel ${active ? "active" : ""}`}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-${backgroundUrl}=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')` }}
            onClick={onClick}
        >
            <h3>{title}</h3>
        </div>
    )
}

const Container = ({ className }) => {
    const [active, setActive] = useState(0);
    return (
        <div className={className}>
            <div className="container">
                {
                    [
                        { title: "Explore The World", backgroundUrl: "1558979158-65a1eaa08691?ixlib" },
                        { title: "Wild Forest", backgroundUrl: "1572276596237-5db2c3e16c5d?ixlib" },
                        { title: "Sunny Beach", backgroundUrl: "1507525428034-b723cf961d3e?ixlib" },
                        { title: "City on Winter", backgroundUrl: "1551009175-8a68da93d5f9?ixlib" },
                        { title: "Mountains - Clouds", backgroundUrl: "1549880338-65ddcdfd017b?ixlib" }
                    ].map((item, i) => {
                        return <Image
                            key={i}
                            active={active === i}
                            {...item}
                            onClick={() => {
                                setActive(i);
                            }} />
                    })
                }
            </div>
        </div>
    )
};


const ExpandingCards = styled(Container)`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    & {
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
        display: flex;
        width: 90vw;
    }

    .panel {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 80vh;
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
        flex: 0.5;
        margin: 10px;
        position: relative;
        transition: flex 0.7s ease-in;
    }

    .panel h3 {
        font-size: 24px;
        position: absolute;
        bottom: 20px;
        left: 20px;
        margin: 0;
        opacity: 0;
    }

    .panel.active {
        flex: 5;
    }

    .panel.active h3 {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
    }

    @media (max-width: 480px) {
        .container {
            width: 100vw;
        }

        .panel:nth-of-type(4),
        .panel:nth-of-type(5) {
            display: none;
        }
    }
`

export default ExpandingCards

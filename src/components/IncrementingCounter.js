import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [twitter, setTwitter] = useState(0);
    const [youTube, setYouTube] = useState(0);
    const [facebook, setFacebook] = useState(0);

    const timer = useCallback(
        (v, target, handle) => {
            let increment = target / 500;
            if (v < target) {
                handle(v + increment);
                setTimeout(() => {
                    timer(v + increment, target, handle)
                }, 1)
            } else {
                handle(target);
            }
        },
        []
    )

    useEffect(() => {
        timer(0, 12000, setTwitter);
        timer(0, 5000, setYouTube);
        timer(0, 7500, setFacebook);
    }, [timer]);

    return (
        <div className={className}>
            <div className="counter-container">
                <i className="fab fa-twitter fa-3x"></i>
                <div className="counter" data-target="12000">{twitter}</div>
                <span>Twitter Followers</span>
            </div>

            <div className="counter-container">
                <i className="fab fa-youtube fa-3x"></i>
                <div className="counter" data-target="5000">{youTube}</div>
                <span>YouTube Subscribers</span>
            </div>
            <div className="counter-container">
                <i className="fab fa-facebook fa-3x"></i>
                <div className="counter" data-target="7500">{facebook}</div>
                <span>Facebook Fans</span>
            </div>
        </div>
    )
}

const IncrementingCounter = styled(Container)`
    & {
        background-color: #8e44ad;
        color: #fff;
        font-family: 'Roboto Mono', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
    
    .counter-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 30px 50px;
    }
    
    .counter {
        font-size: 60px;
        margin-top: 10px;
    }
    
    @media (max-width: 576px) {
        & {
            flex-direction: column;
        }

        .counter {
            font-size: 2rem;
        }
    }
`

export default IncrementingCounter

import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {

    const getImgPath = (key, size) => {
        return `https://images.unsplash.com/photo-${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${size}&q=80`
    }
    const imgs = [
        { key: "1549880338-65ddcdfd017b", size: "2100" },
        { key: "1511593358241-7eea1f3c84e5", size: "1934" },
        { key: "1495467033336-2effd8753d51", size: "2100" },
        { key: "1522735338363-cc7313be0ae0", size: "2689" },
        { key: "1559087867-ce4c91325525", size: "2100" }
    ];
    const [img, setimg] = useState(0);
    return (
        <div className={className} style={{ backgroundImage: `url('${getImgPath(imgs[img].key, imgs[img].size)}')` }}>
            <div className="slider-container">
                {
                    imgs.map(({ key, size }, i) => {
                        return <div key={i}
                            className={`slide ${i === img ? "active" : ""}`}
                            style={{ backgroundImage: `url('${getImgPath(key, size)}')` }}
                        ></div>
                    })
                }
                <button className="arrow left-arrow" onClick={() => {
                    setimg(img - 1 < 0 ? imgs.length - 1 : img - 1);
                }}>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button className="arrow right-arrow" onClick={() => {
                    setimg(img + 1 > imgs.length - 1 ? 0 : img + 1);
                }}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

const BackgroundSlider = styled(Container)`
    & {
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
        background-position: center center;
        background-size: cover;
        transition: 0.4s;
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 80px);
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 0;
    }
    
    .slider-container {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        height: 70vh;
        width: 70vw;
        position: relative;
        overflow: hidden;
    }
    
    .slide {
        opacity: 0;
        height: 100vh;
        width: 100vw;
        background-position: center center;
        background-size: cover;
        position: absolute;
        top: -15vh;
        left: -15vw;
        transition: 0.4s ease;
        z-index: 1;
    }
    
    .slide.active {
        opacity: 1;
    }
    
    .arrow {
        position: fixed;
        background-color: transparent;
        color: #fff;
        padding: 20px;
        font-size: 30px;
        border: 2px solid orange;
        top: calc(50% + 80px);
        transform: translateY(-50%);
        cursor: pointer;
    }
    
    .arrow:focus {
        outline: 0;
    }
    
    .left-arrow {
        left: calc(15vw - 65px);
    }
    
    .right-arrow {
        right: calc(15vw - 65px);
    }

    @media (max-width: 576px) {
        .arrow {
            padding: 10px;
        }

        .left-arrow {
            left: calc(15vw - 3rem);
        }
        
        .right-arrow {
            right: calc(15vw - 3rem);
        }
    }
`

export default BackgroundSlider

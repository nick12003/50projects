import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const imgs = [
        { key: "1599394022918-6c2776530abb", width: "1458", alt: "first-image" },
        { key: "1593642632559-0c6d3fc62b89", width: "1500", alt: "second-image" },
        { key: "1599423300746-b62533397364", width: "1500", alt: "third-image" },
        { key: "1599561046251-bfb9465b4c44", width: "1492", alt: "fourth-image" }
    ];
    const [index, setIndex] = useState(0);
    const timer = useRef();
    const getImgPath = (key, width) => {
        return `https://images.unsplash.com/photo-${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}&q=80`;
    }

    const changePage = (isNext, current, max) => {
        if (isNext) {
            if (current === max - 1) {
                setIndex(0);
            } else {
                setIndex(current + 1);
            }
        } else {
            if (current === 0) {
                setIndex(max - 1);
            } else {
                setIndex(current - 1);
            }
        }
    }

    useEffect(() => {
        timer.current = setInterval(() => {
            changePage(true, index, imgs.length);
        }, 2000);
        return () => {
            clearInterval(timer.current);
        };
    }, [index, imgs.length]);
    return (
        <div className={className}>
            <div className="carousel">
                <div className="image-container" style={{ transform: `translateX(-${index * 500}px)` }}>
                    {
                        imgs.map(({ key, width, alt }, i) => {
                            return <img key={i} src={getImgPath(key, width)} alt={alt} />
                        })
                    }
                </div>
                <div className="buttons-container">
                    <button className="btn" onClick={() => {
                        changePage(false, index, imgs.length);
                    }}>
                        Prev
                    </button>
                    <button className="btn" onClick={() => {
                        changePage(true, index, imgs.length);
                    }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

const ImageCarousel = styled(Container)`
    & {
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
    }
    
    img {
        width: 500px;
        height: 500px;
        object-fit: cover;
    }
    
    .carousel {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        height: 530px;
        width: 500px;
        overflow: hidden;
    }
    
    .image-container {
        display: flex;
        transform: translateX(0);
        transition: transform 0.5s ease-in-out;
    }
    
    .buttons-container {
        display: flex;
        justify-content: space-between;
    }
    
    .btn {
        background-color: rebeccapurple;
        color: #fff;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        width: 49.5%;
    }
    
    .btn:hover {
        opacity: 0.9;
    }
    
    .btn:focus {
        outline: none;
    }
`

export default ImageCarousel

import React from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const getRandomImgUrl = () => {
        return `https://source.unsplash.com/random/${Math.floor(Math.random() * 10) + 300}x${Math.floor(Math.random() * 10) + 300}`;
    }
    return (
        <div className={className}>
            <h1>Random Image Feed</h1>
            <div className="container">
                {
                    Array(20).fill().map((a, i) => {
                        return <img key={i} src={getRandomImgUrl()} alt="" />
                    })
                }
            </div>
        </div>
    )
}

const RandomImageFeed = styled(Container)`
    & {
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
        overflow-y: auto;
    }
    
    h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }

    .title {
        margin: 10px 0 0;
        text-align: center;
    }
    
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1000px;
    }
    
    .container img {
        object-fit: cover;
        margin: 10px;
        height: 300px;
        width: 300px;
        max-width: 100%;
    }
`

export default RandomImageFeed

import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [loding, setLoding] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 3000);
    }, []);
    return (
        <div className={className}>
            <div className="card">
                {
                    loding ? <>
                        <div className="card-header animated-bg">
                        </div>
                        <div className="card-content">
                            <h3 className="card-title animated-bg animated-bg-text">
                            </h3>
                            <p className="card-excerpt" id="excerpt">
                                <span className="animated-bg animated-bg-text"></span>
                                <span className="animated-bg animated-bg-text"></span>
                                <span className="animated-bg animated-bg-text"></span>
                            </p>
                            <div className="author">
                                <div className="profile-img animated-bg"></div>
                                <div className="author-info">
                                    <strong className="animated-bg animated-bg-text"></strong>
                                    <small className="animated-bg animated-bg-text"></small>
                                </div>
                            </div>
                        </div>
                    </> : <>
                        <div className="card-header">
                            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">
                                Lorem ipsum dolor sit amet
                            </h3>
                            <p className="card-excerpt">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis
                            </p>
                            <div className="author">
                                <div className="profile-img">
                                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
                                </div>
                                <div className="author-info">
                                    <strong>John Doe</strong>
                                    <small>Oct 08, 2020</small>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

const ContentPlaceholder = styled(Container)`
    & {
        background-color: #ecf0f1;
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
    
    img {
        max-width: 100%;
    }
    
    .card {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        width: 350px;
    }
    
    .card-header {
        height: 200px;
    }
    
    .card-header img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    
    .card-content {
        background-color: #fff;
        padding: 30px;
    }
    
    .card-title {
        height: 20px;
        margin: 0;
    }
    
    .card-excerpt {
        color: #777;
        margin: 10px 0 20px;
    }
    
    .author {
        display: flex;
    }
    
    .profile-img {
        border-radius: 50%;
        overflow: hidden;
        height: 40px;
        width: 40px;
    }
    
    .author-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;
        width: 100px;
    }
    
    .author-info small {
        color: #aaa;
        margin-top: 5px;
    }
    
    .animated-bg {
        background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 10%,
        #f6f7f8 20%,
        #f6f7f8 100%
        );
        background-size: 200% 100%;
        animation: bgPos 1s linear infinite;
    }
    
    .animated-bg-text {
        border-radius: 50px;
        display: inline-block;
        margin: 0;
        height: 10px;
        width: 100%;
    }
    
    @keyframes bgPos {
        0% {
        background-position: 50% 0;
        }
    
        100% {
        background-position: -150% 0;
        }
    }
`

export default ContentPlaceholder

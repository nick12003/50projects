import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const option = [
        { img: "187150", text: "Unhappy" },
        { img: "187136", text: "Neutral" },
        { img: "187133", text: "Satisfied" },
    ];
    const [active, setActive] = useState(2);
    const [send, setSend] = useState(false);
    return (
        <div className={className}>
            <div id="panel" className="panel-container">
                {
                    send ? <>
                        <i className="fas fa-heart"></i>
                        <strong>Thank You!</strong>
                        <br />
                        <strong>Feedback: {option[active].text}</strong>
                        <p>We'll use your feedback to improve our customer support</p>
                    </> : <>
                        <strong>How satisfied are you with our <br /> customer support performance?</strong>
                        <div className="ratings-container">
                            {
                                option.map(({ img, text }, i) => {
                                    return <div key={i} className={`rating ${active === i ? "active" : ""}`} onClick={() => {
                                        setActive(i);
                                    }}>
                                        <img src={`https://image.flaticon.com/icons/svg/187/${img}.svg`} alt="" />
                                        <small>{text}</small>
                                    </div>
                                })
                            }
                        </div>
                        <button className="btn" onClick={() => {
                            setSend(true);
                        }}>Send Review</button>
                    </>
                }

            </div>
        </div>
    )
}

const FeedbackUiDesign = styled(Container)`
    & {
        background-color: #fef9f2;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .panel-container {
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        font-size: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 30px;
        max-width: 400px;
    }
    
    .panel-container strong {
        line-height: 20px;
    }
    
    .ratings-container {
        display: flex;
        margin: 20px 0;
    }
    
    .rating {
        flex: 1;
        cursor: pointer;
        padding: 20px;
        margin: 10px 5px;
    }
    
    .rating:hover,
    .rating.active {
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .rating img {
        width: 40px;
    }
    
    .rating small {
        color: #555;
        display: inline-block;
        margin: 10px 0 0;
    }
    
    .rating:hover small,
    .rating.active small {
        color: #111;
    }
    
    .btn {
        background-color: #302d2b;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 12px 30px;
        cursor: pointer;
    }
    
    .btn:focus {
        outline: 0;
    }
    
    .btn:active {
        transform: scale(0.98);
    }
    
    .fa-heart {
        color: red;
        font-size: 30px;
        margin-bottom: 10px;
    }
`

export default FeedbackUiDesign

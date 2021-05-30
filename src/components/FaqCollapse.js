import React, { useState } from 'react'
import styled from 'styled-components';
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';

const FaqCard = ({ question, answer, df }) => {
    const [active, setActive] = useState(df);
    return (
        <>
            <div className={`faq ${active ? "active" : ""}`}>
                <h3 className="faq-title">
                    {question}
                </h3>
                <p className="faq-text">
                    {answer}
                </p>
                <button className="faq-toggle" onClick={() => { setActive(!active) }}>
                    {
                        active ? <AiOutlineClose /> : <AiFillCaretDown />
                    }
                </button>
            </div>
        </>
    )
}

const Container = ({ className }) => {
    return (
        <div className={className}>
            <h1>Frequently Asked Questions</h1>
            <div className="faq-container">
                {
                    [
                        {
                            question: "Why shouldn't we trust atoms?",
                            answer: "They make up everything"
                        },
                        {
                            question: "What do you call someone with no body and no nose?",
                            answer: "Nobody knows."
                        },
                        {
                            question: "What's the object-oriented way to become wealthy?",
                            answer: "Inheritance."
                        },
                        {
                            question: "How many tickles does it take to tickle an octopus?",
                            answer: "Ten-tickles!"
                        },
                        {
                            question: "What is: 1 + 1?",
                            answer: "Depends on who are you asking."
                        },
                        {
                            question: "where are you?",
                            answer: "here."
                        }
                    ].map((item, i) => {
                        return <FaqCard key={i} {...item}></FaqCard>
                    })
                }
            </div>
        </div>
    )
}

const FaqCollapse = styled(Container)`
    & {
        position: relative;
        height: calc(100vh - 80px);
        top: 80px;
        font-family: 'Muli', sans-serif;
        background-color: #f0f0f0;
        overflow-y: auto;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    
    h1 {
        padding: 20px;
        text-align: center;
    }
    
    .faq-container {
        max-width: 600px;
        margin: 0 auto;
    }
    
    .faq {
        background-color: transparent;
        border: 1px solid #9fa4a8;
        border-radius: 10px;
        margin: 20px 0;
        padding: 30px;
        position: relative;
        overflow: hidden;
        transition: 0.3s ease;
    }
    
    .faq.active {
        background-color: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
    }
    
    .faq.active::before,
    .faq.active::after {
        content: '\f075';
        font-family: 'Font Awesome 5 Free';
        color: #2ecc71;
        font-size: 7rem;
        position: absolute;
        opacity: 0.2;
        top: 20px;
        left: 20px;
        z-index: 0;
    }
    
    .faq.active::before {
        color: #3498db;
        top: -10px;
        left: -30px;
        transform: rotateY(180deg);
    }
    
    .faq-title {
        margin: 0 35px 0 0;
    }
    
    .faq-text {
        display: none;
        margin: 30px 0 0;
    }
    
    .faq.active .faq-text {
        display: block;
    }
    
    .faq-toggle {
        background-color: transparent;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        padding: 0;
        position: absolute;
        top: 30px;
        right: 30px;
        height: 30px;
        width: 30px;
    }
    
    .faq-toggle:focus {
        outline: 0;
    }
    
    .faq-toggle .fa-times {
        display: none;
    }
    
    .faq.active .faq-toggle .fa-times {
        color: #fff;
        display: block;
    }
    
    .faq.active .faq-toggle .fa-chevron-down {
        display: none;
    }
    
    .faq.active .faq-toggle {
        background-color: #9fa4a8;
    }
`

export default FaqCollapse

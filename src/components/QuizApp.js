import React, { useState } from 'react'
import styled from 'styled-components';

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const Container = ({ className }) => {
    const [answers, setAnswers] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState(null);

    const onChangeAnswer = (e) => {
        setCurrentAnswer(e.target.id);
    }

    const checkAnswer = () => {
        let score = 0;
        answers.forEach((a, i) => {
            if (a === quizData[i].correct)
                score = score + 1;
        });
        return `${score}/${quizData.length}`;
    }
    return (
        <div className={className}>
            <div className="quiz-container" id="quiz">
                {
                    answers.length === quizData.length ? <>
                        <h2>You answered {checkAnswer()} questions correctly</h2>
                        <button onClick={() => {
                            setAnswers([]);
                            setCurrentAnswer(null);
                        }}>Reload</button>
                    </> : <>
                        <div className="quiz-header">
                            <h2>{quizData[answers.length].question}</h2>
                            <ul>
                                <li>
                                    <input type="radio" name="answer" id="a" className="answer" onChange={onChangeAnswer} checked={currentAnswer === "a"} />
                                    <label htmlFor="a">{quizData[answers.length].a}</label>
                                </li>

                                <li>
                                    <input type="radio" name="answer" id="b" className="answer" onChange={onChangeAnswer} checked={currentAnswer === "b"} />
                                    <label htmlFor="b">{quizData[answers.length].b}</label>
                                </li>

                                <li>
                                    <input type="radio" name="answer" id="c" className="answer" onChange={onChangeAnswer} checked={currentAnswer === "c"} />
                                    <label htmlFor="c">{quizData[answers.length].c}</label>
                                </li>

                                <li>
                                    <input type="radio" name="answer" id="d" className="answer" onChange={onChangeAnswer} checked={currentAnswer === "d"} />
                                    <label htmlFor="d">{quizData[answers.length].d}</label>
                                </li>
                            </ul>
                        </div>
                        <button onClick={() => {
                            let items = [...answers];
                            items.push(currentAnswer);
                            setAnswers(items);
                            setCurrentAnswer(null);
                        }}>Submit</button>
                    </>
                }
            </div>
        </div>
    )
}

const QuizApp = styled(Container)`
    & {
        background-color: #b8c6db;
        background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
    
    .quiz-container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
        width: 600px;
        overflow: hidden;
    }
    
    .quiz-header {
        padding: 4rem;
    }
    
    h2 {
        padding: 1rem;
        text-align: center;
        margin: 0;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    ul li {
        font-size: 1.2rem;
        margin: 1rem 0;
    }
    
    ul li label {
        cursor: pointer;
    }

    .answer{
        margin-right:10px;
    }

    button {
        background-color: #8e44ad;
        color: #fff;
        border: none;
        display: block;
        width: 100%;
        cursor: pointer;
        font-size: 1.1rem;
        font-family: inherit;
        padding: 1.3rem;
    }
    
    button:hover {
        background-color: #732d91;
    }
    
    button:focus {
        outline: none;
        background-color: #5e3370;
    }
`

export default QuizApp

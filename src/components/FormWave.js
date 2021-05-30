import React from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
                <h1>Please Login</h1>
                <div>
                    <div className="form-control">
                        <input type="text" required="" />
                        <label>
                            {
                                "Email".split('').map((letter, i) => {
                                    return <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>{letter}</span>
                                })
                            }
                        </label>
                    </div>

                    <div className="form-control">
                        <input type="password" required="" />
                        <label>
                            {
                                "Password".split('').map((letter, i) => {
                                    return <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>{letter}</span>
                                })
                            }
                        </label>
                    </div>

                    <button className="btn">Login</button>

                    <p className="text">Don't have an account? <span className="register">Register</span> </p>
                </div>
            </div>
        </div>
    )
}

const FormWave = styled(Container)`
    & {
        background-color: steelblue;
        color: #fff;
        font-family: 'Muli', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .container {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 20px 40px;
        border-radius: 5px;
    }
    
    .container h1 {
        text-align: center;
        margin-bottom: 30px;
    }
    
    .container span {
        text-decoration: none;
        color: lightblue;
    }
    
    .register{
        cursor: pointer;
    }

    .btn {
        cursor: pointer;
        display: inline-block;
        width: 100%;
        background: lightblue;
        padding: 15px;
        font-family: inherit;
        font-size: 16px;
        border: 0;
        border-radius: 5px;
    }
    
    .btn:focus {
        outline: 0;
    }
    
    .btn:active {
        transform: scale(0.98);
    }
    
    .text {
        margin-top: 30px;
    }
    
    .form-control {
        position: relative;
        margin: 20px 0 40px;
        width: 300px;
    }
    
    .form-control input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: #fff;
    }
    
    .form-control input:focus,
    .form-control input:valid {
        outline: 0;
        border-bottom-color: lightblue;
    }
    
    .form-control label {
        pointer-events: none;
        position: absolute;
        top: 15px;
        left: 0;
    }
    
    .form-control label span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .form-control input:focus + label span{
        color: lightblue;
        transform: translateY(-30px);
    }

    @media (max-width: 576px) {
        .container {
            padding: 10px 20px;
        }
    }
`

export default FormWave;

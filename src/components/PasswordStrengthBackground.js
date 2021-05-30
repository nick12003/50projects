import React, { useState } from 'react';
import styled from 'styled-components';

const Container = ({ className }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={className}>
            <div className="background" style={{ filter: `blur(${20 - password.length * 2}px)` }}></div>
            <div className="container">
                <h1 className="title">Image Password Strength</h1>
                <p className="title-sub">Change the password to see the effect</p>
                <div className="box">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="text"
                        className="input"
                        id="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="box">
                    <label htmlFor="password" className="label">Password:</label>
                    <input
                        type="password"
                        className="input"
                        id="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button className="button">
                    Submit
                </button>
            </div>
        </div>
    )
}

const PasswordStrengthBackground = styled(Container)`
    & {
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
    & * {
        border-width: 0;
        border-style: solid;
        border-color: #e2e8f0;
    }

    .background {
        background: url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b')
        no-repeat center center/cover;
        position: absolute;
        top: -20px;
        bottom: -20px;
        left: -20px;
        right: -20px;
        z-index: -1;
        filter: blur(20px);
    }

    .container {
        text-align: center;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
        padding: 2.5rem;
        border-radius: .25rem;
        background-color: #fff;
    }

    .title {
        font-size: 1.875rem;
    }

    .itle-sub {
        color: #4a5568;
        font-size: .875rem;
    }

    .box{
        text-align: left;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .label{
        --text-opacity: 1;
        color: #1a202c;
    }

    .input{
        width: 100%;
        padding: .5rem;
        margin-top: .5rem;
        display: block;
        border-width: 1px;
        border-radius: .25rem;
        overflow: visible;
        font-size: 100%;
        border-style: solid;
        border-color: #e2e8f0;
    }

    .button{
        width: 100%;
        color: #fff;
        padding-top: .5rem;
        padding-bottom: .5rem;
        margin-top: 1rem;
        display: inline-block;
        border-radius: .25rem;
        --bg-opacity: 1;
        background-color: #000;
        -webkit-appearance: button;
        cursor: pointer;
        background-image: none;
        text-transform: none;
        overflow: visible;
        font-size: 100%;
    }

`

export default PasswordStrengthBackground

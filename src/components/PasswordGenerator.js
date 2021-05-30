import React, { useState } from 'react'
import styled from 'styled-components';
import copy from "copy-to-clipboard";

const Container = ({ className }) => {
    const [value, setValue] = useState({
        length: 20,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });
    const [password, setPassword] = useState("");
    const inputHandle = (e) => {
        let items = { ...value };
        let v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        items[e.target.name] = v;
        setValue(items);
    }

    const getRandomLower = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    const getRandomUpper = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    const getRandomNumber = () => {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    const getRandomSymbol = () => {
        const symbols = '!@#$%^&*(){}[]=<>/,.';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const randomFunc = {
        lowercase: getRandomLower,
        uppercase: getRandomUpper,
        numbers: getRandomNumber,
        symbols: getRandomSymbol
    }

    const generator = () => {
        let generatedPassword = "";
        const typesCount = value.lowercase + value.uppercase + value.numbers + value.symbols;
        const typesArr = [
            { type: "lowercase", check: value.lowercase },
            { type: "uppercase", check: value.uppercase },
            { type: "numbers", check: value.numbers },
            { type: "symbols", check: value.symbols }
        ];

        if (typesCount === 0) {
            return;
        }
        for (let i = 0; i < value.length; i += typesCount) {
            let add = "";
            typesArr.forEach(({ type, check }) => {
                add = add + (check ? randomFunc[type]() : "");
            });
            generatedPassword = generatedPassword + add;
            add = "";
        }

        setPassword(generatedPassword.slice(0, value.length));
    }
    return (
        <div className={className}>
            <div className="container">
                <h2>Password Generator</h2>
                <div className="result-container">
                    <span id="result">{password}</span>
                    <button className="btn" onClick={() => {
                        copy(password);
                    }}>
                        <i className="far fa-clipboard"></i>
                    </button>
                </div>
                <div className="settings">
                    <div className="setting">
                        <label>Password Length</label>
                        <input
                            type="number"
                            name="length"
                            min="4"
                            max="20"
                            value={value.length}
                            onChange={inputHandle} />
                    </div>
                    <div className="setting">
                        <label>Include uppercase letters</label>
                        <input type="checkbox" name="uppercase" checked={value.uppercase} onChange={inputHandle} />
                    </div>
                    <div className="setting">
                        <label>Include lowercase letters</label>
                        <input type="checkbox" name="lowercase" checked={value.lowercase} onChange={inputHandle} />
                    </div>
                    <div className="setting">
                        <label>Include numbers</label>
                        <input type="checkbox" name="numbers" checked={value.numbers} onChange={inputHandle} />
                    </div>
                    <div className="setting">
                        <label>Include symbols</label>
                        <input type="checkbox" name="symbols" checked={value.symbols} onChange={inputHandle} />
                    </div>
                </div>
                <button className="btn btn-large" onClick={generator}>
                    Generate Password
                </button>
            </div>
        </div>
    )
}

const PasswordGenerator = styled(Container)`
    & {
        background-color: #3b3b98;
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
        padding: 10px;
        margin: 0;
    }
    
    h2 {
        margin: 10px 0 20px;
        text-align: center;
    }
    
    .container {
        background-color: #23235b;
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
        padding: 20px;
        width: 350px;
        max-width: 100%;
    }
    
    .result-container {
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        font-size: 18px;
        letter-spacing: 1px;
        padding: 12px 10px;
        height: 50px;
        width: 100%;
    }
    
    .result-container #result {
        word-wrap: break-word;
        max-width: calc(100% - 40px);
    }
    
    .result-container .btn {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
    
    .btn {
        border: none;
        background-color: #3b3b98;
        color: #fff;
        font-size: 16px;
        padding: 8px 12px;
        cursor: pointer;
    }
    
    .btn-large {
        display: block;
        width: 100%;
    }
    
    .setting {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
`

export default PasswordGenerator

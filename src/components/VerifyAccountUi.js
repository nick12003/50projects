import React, { useState, createRef } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [inputs, setInputs] = useState(Array(6).fill().map(i => {
        return { value: "", ref: createRef() }
    }));

    return (
        <div className={className}>
            <div className="container">
                <h2>Verify Your Account</h2>
                <p>We emailed you the six digit code to cool_guy@email.com <br /> Enter the code below to confirm your email address.</p>
                <div className="code-container">
                    {
                        inputs.map(({ value, ref }, i) => {
                            return <input
                                key={i}
                                ref={ref}
                                type="number"
                                className="code"
                                placeholder="0"
                                min="0"
                                max="9"
                                value={value}
                                required
                                onChange={(e) => {
                                    let inputValue = e.target.value;
                                    if (inputValue.length > 0) {
                                        let finalValue = inputValue[inputValue.length - 1];
                                        if (parseInt(finalValue) >= 0 && parseInt(finalValue) <= 9) {
                                            let items = [...inputs];
                                            items[i].value = finalValue;
                                            setInputs(items);
                                            if (i < inputs.length - 1) {
                                                inputs[i + 1].ref.current.focus();
                                            }
                                        }
                                    }

                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Backspace") {
                                        let items = [...inputs];
                                        items[i].value = "";
                                        setInputs(items);
                                        if (i > 0) {
                                            inputs[i - 1].ref.current.focus();
                                        }
                                    }
                                }}
                            />
                        })
                    }
                </div>
                <small className="info">
                    This is design only. We didn't actually send you an email as we don't have your email, right?
                </small>
            </div>
        </div>
    )
}

const VerifyAccountUi = styled(Container)`
    & {
        background-color: #fbfcfe;
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .container {
        background-color: #fff;
        border: 3px #000 solid;
        border-radius: 10px;
        padding: 30px;
        max-width: 1000px;
        text-align: center;
    }
    
    .code-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px 0;
    }
    
    .code {
        border-radius: 5px;
        font-size: 75px;
        height: 120px;
        width: 100px;
        border: 1px solid #eee;
        margin: 1%;
        text-align: center;
        font-weight: 300;
        -moz-appearance: textfield;
    }
    
    .code::-webkit-outer-spin-button,
    .code::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    .code:valid {
        border-color: #3498db;
        box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
    }
    
    .info {
        background-color: #eaeaea;
        display: inline-block;
        padding: 10px;
        line-height: 20px;
        max-width: 400px;
        color: #777;
        border-radius: 5px;
    }
    
    @media (max-width: 600px) {
        .code-container {
        flex-wrap: wrap;
        }
    
        .code {
        font-size: 60px;
        height: 80px;
        max-width: 70px;
        }
    }
`

export default VerifyAccountUi

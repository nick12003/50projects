import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [value, setValue] = useState([
        {
            id: "Good", check: false
        },
        {
            id: "Cheap", check: false
        },
        {
            id: "Fast", check: false
        }
    ]);

    const inputHandle = (e) => {
        let items = [...value];
        items.forEach(({ id }, i) => {
            if (id === e.target.name)
                items[i].check = e.target.checked;
        })
        setValue(items);
    }
    return (
        <div className={className}>
            <h2>How do you want your project to be?</h2>
            {
                value.map(({ id, check }, i) => {
                    return <div key={i} className="toggle-container">
                        <input
                            type="checkbox"
                            checked={check}
                            name={id}
                            id={id}
                            className="toggle"
                            onChange={inputHandle} />
                        <label htmlFor={id} className="label">
                            <div className="ball"></div>
                        </label>
                        <span>{id}</span>
                    </div>
                })
            }
        </div>
    )
}

const GoodCheapFast = styled(Container)`
    & {
        font-family: 'Roboto', sans-serif;
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
    
    .toggle-container {
        display: flex;
        align-items: center;
        margin: 10px 0;
        width: 200px;
    }
    
    .toggle {
        visibility: hidden;
    }
    
    .label {
        position: relative;
        background-color: #d0d0d0;
        border-radius: 50px;
        cursor: pointer;
        display: inline-block;
        margin: 0 15px 0;
        width: 80px;
        height: 40px;
    }
    
    .toggle:checked + .label {
        background-color: #8e44ad;
    }
    
    .ball {
        background: #fff;
        height: 34px;
        width: 34px;
        border-radius: 50%;
        position: absolute;
        top: 3px;
        left: 3px;
        align-items: center;
        justify-content: center;
        animation: slideOff 0.3s linear forwards;
    }
    
    .toggle:checked + .label .ball {
        animation: slideOn 0.3s linear forwards;
    }
    
    @keyframes slideOn {
        0% {
        transform: translateX(0) scale(1);
        }
        50% {
        transform: translateX(20px) scale(1.2);
        }
        100% {
        transform: translateX(40px) scale(1);
        }
    }
    
    @keyframes slideOff {
        0% {
        transform: translateX(40px) scale(1);
        }
        50% {
        transform: translateX(20px) scale(1.2);
        }
        100% {
        transform: translateX(0) scale(1);
        }
    }
`

export default GoodCheapFast

import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

const useRate = (value) => {
    const [rate, setRate] = useState(0);
    const mounted = useRef();
    const tm = useRef();
    const tmTwo = useRef();

    useEffect(() => {
        if (!mounted.current) {
            setRate(value);
            mounted.current = true;
        }
        else {
            if (rate > value) {
                if (tm.current)
                    clearTimeout(tm.current)
                tmTwo.current = setTimeout(() => { setRate(rate - 1) }, 20);
            }
            else if (rate < value) {
                if (tmTwo.current)
                    clearTimeout(tmTwo.current)
                tm.current = setTimeout(() => { setRate(rate + 1) }, 20);
            }
        }

    }, [value, rate]);
    return rate;
}

const Container = ({ className }) => {
    const [positive, setPositive] = useState(0);
    const [negative, setNegative] = useState(100);
    const positiveP = useRate(positive);
    const negativeP = useRate(negative);
    useEffect(() => {
        if (positiveP < 100)
            setPositive(positiveP + 1);
    }, [positiveP])
    useEffect(() => {
        if (negativeP > 0)
            setNegative(negativeP - 1);
    }, [negativeP])
    return (
        <div className={className}>
            <section className="bg" style={{ filter: `blur(${negativeP / 10}px)` }}></section>
            <div className="loading-text" style={{ opacity: `${negativeP / 100}` }}>{positiveP}%</div>
        </div>
    )
}

const BlurryLoading = styled(Container)`
    & {
        font-family: 'Ubuntu', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .bg {
        background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')
        no-repeat center center/cover;
        position: absolute;
        top: -30px;
        left: -30px;
        width: calc(100vw + 60px);
        height: calc(100vh - 80px + 60px);
        z-index: -1;
        filter: blur(0px);
    }
    
    .loading-text {
        font-size: 50px;
        color: #fff;
    }
  
`

export default BlurryLoading

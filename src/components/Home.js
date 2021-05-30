import React from 'react';
import styled from 'styled-components';

function Container({ className }) {
    return (
        <div className={className}>
            welcome
        </div>
    );
}

const Home = styled(Container)`
    & {
        background-color: #111;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
        color:#fff;
        font-size:10rem;
    }

    @media (max-width: 576px) {
        & {
            font-size:5rem;
        }
    }
`

export default Home;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = ({ className }) => {
    const [actvice, setActive] = useState(false);
    return (
        <div className={className}>
            <button className="nav-btn open-btn" onClick={() => {
                setActive(true);
            }}>
                <i className="fas fa-bars"></i>
            </button>

            <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo" className="logo" />

            <p className="text">Mobile Navigation</p>

            <div className={`nav nav-black ${actvice ? "visible" : ""}`}>
                <div className={`nav nav-red ${actvice ? "visible" : ""}`}>
                    <div className={`nav nav-white ${actvice ? "visible" : ""}`}>
                        <button className="nav-btn close-btn" onClick={() => {
                            setActive(false);
                        }}>
                            <i className="fas fa-times"></i>
                        </button>

                        <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt="Logo" className="logo" />

                        <ul className="list">
                            <li><Link to="#">Teams</Link></li>
                            <li><Link to="#">Locations</Link></li>
                            <li><Link to="#">Life at Netflix</Link></li>
                            <li>
                                <ul>
                                    <li><Link to="#">Netflix culture memo</Link></li>
                                    <li><Link to="#">Work life balance</Link></li>
                                    <li><Link to="#">Inclusion & diversity</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NetflixMobileNavigation = styled(Container)`
    & {
        font-family: 'Muli', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow-y: auto;
    }
    
    .text {
        text-transform: uppercase;
    }
    
    .logo {
        width: 150px;
    }
    
    .nav-btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 20px;
    }
    
    .open-btn {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    
    .nav {
        position: absolute;
        top: 0;
        left: 0;
        height: calc(100vh - 80px);
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
    }
    
    .nav.visible {
        transform: translateX(0);
    }
    
    .nav-black {
        background-color: rgb(34, 31, 31);
        width: 60%;
        max-width: 480px;
        min-width: 320px;
        transition-delay: 0.4s;
    }
    
    .nav-black.visible {
        transition-delay: 0s;
    }
    
    .nav-red {
        background-color: rgb(229, 9, 20);
        width: 95%;
        transition-delay: 0.2s;
    }
    
    .nav-red.visible {
        transition-delay: 0.2s;
    }
    
    .nav-white {
        background-color: #fff;
        width: 95%;
        padding: 40px;
        position: relative;
        transition-delay: 0s;
    }
    
    .nav-white.visible {
        transition-delay: 0.4s;
    }
    
    .close-btn {
        opacity: 0.3;
        position: absolute;
        top: 40px;
        right: 30px;
    }
    
    .list {
        list-style-type: none;
        padding: 0;
    }
    
    .list li {
        margin: 20px 0;
    }
    
    .list li a {
        color: rgb(34, 31, 31);
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
    }
    
    .list ul {
        list-style-type: none;
        padding-left: 20px;
    }
  
`

export default NetflixMobileNavigation

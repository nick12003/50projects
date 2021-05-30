import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const imgs = [
        { key: "1480074568708-e7b720bb3f09", width: "1053", alt: "home" },
        { key: "1454165804606-c3d57bc86b40", width: "1050", alt: "work" },
        { key: "1471107340929-a87cd0f5b5f3", width: "1266", alt: "blog" },
        { key: "1522202176988-66273c2fd55f", width: "1351", alt: "about" }
    ]
    const bts = [
        { text: "Home", icon: "fa-home" },
        { text: "Work", icon: "fa-box" },
        { text: "Blog", icon: "fa-book-open" },
        { text: "About Us", icon: "fas fa-users" }
    ]
    const [active, setActive] = useState(0);

    const getImgUrl = (key, width) => {
        return `https://images.unsplash.com/photo-${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}&q=80`;
    }
    return (
        <div className={className}>
            <div className="phone">
                {
                    imgs.map(({ key, width, alt }, i) => {
                        return <img
                            key={i}
                            src={getImgUrl(key, width)}
                            alt={alt}
                            className={`content ${active === i ? "show" : ""}`} />
                    })
                }
                <nav>
                    <ul>
                        {
                            bts.map(({ text, icon }, i) => {
                                return <li key={i} className={active === i ? "active" : ""} onClick={() => {
                                    setActive(i);
                                }}>
                                    <i className={`fas ${icon}`}></i>
                                    <p>{text}</p>
                                </li>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const MobileTabNavigation = styled(Container)`
    & {
        background-color: rgba(155, 89, 182, 0.7);
        font-family: 'Open Sans', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
    }
    
    .phone {
        position: relative;
        overflow: hidden;
        border: 3px solid #eee;
        border-radius: 15px;
        height: 600px;
        width: 340px;
    }
    
    .phone .content {
        opacity: 0;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        height: calc(100% - 60px);
        width: 100%;
        transition: opacity 0.4s ease;
    }
    
    .phone .content.show {
        opacity: 1;
    }
    
    nav {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-top: -5px;
        width: 100%;
    }
    
    nav ul {
        background-color: #fff;
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
        height: 60px;
    }
    
    nav li {
        color: #777;
        cursor: pointer;
        flex: 1;
        padding: 10px;
        text-align: center;
    }
    
    nav ul li p {
        font-size: 12px;
        margin: 2px 0;
    }
    
    nav ul li:hover,
    nav ul li.active {
        color: #8e44ad;
    }
`

export default MobileTabNavigation

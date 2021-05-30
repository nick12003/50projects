import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = ({ className }) => {
    const [nav, setNav] = useState(false);
    const navRef = useRef();
    const bodyRef = useRef();
    const fixNav = () => {
        if (bodyRef.current.scrollTop > navRef.current.offsetHeight + 80) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    useEffect(() => {
        bodyRef.current.addEventListener('scroll', fixNav);
    }, []);

    return (
        <div className={className} ref={bodyRef}>
            <nav className={`nav ${nav ? "active" : ""}`} ref={navRef}>
                <div className="container">
                    <h1 className="logo"><Link to="#">My Website</Link></h1>
                    <ul>
                        <li><Link to="#" className="current">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Services</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="hero">
                <div className="container">
                    <h1>Welcome To My Website</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
                </div>
            </div>

            <section className="container content">
                <h2>Content One</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</p>

                <h3>Content Two</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?</p>
            </section>
        </div>
    )
}

const StickyNavbar = styled(Container)`
    & {
        font-family: 'Open Sans', sans-serif;
        color: #222;
        padding-bottom: 50px;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        overflow-y: scroll;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .nav {
        position: fixed;
        background-color: #222;
        top: 80px;
        left: 0;
        right: 0;
        transition: all 0.3s ease-in-out;
    }
    
    .nav .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        transition: all 0.3s ease-in-out;
    }
    
    .nav ul {
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: center;
    }
    
    .nav a {
        color: #fff;
        text-decoration: none;
        padding: 7px 15px;
        transition: all 0.3s ease-in-out;
    }
    
    .nav.active {
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    .nav.active a {
        color: #000;
    }
    
    .nav.active .container {
        padding: 10px 0;
    }
    
    .nav a.current,
    .nav a:hover {
        color: #c0392b;
        font-weight: bold;
    }
    
    .hero {
        background-image: url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;
        height: 100vh;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        margin-bottom: 20px;
        z-index: -2;
    }
    
    .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }
    
    .hero h1 {
        font-size: 46px;
        margin: -20px 0 20px;
    }
    
    .hero p {
        font-size: 20px;
        letter-spacing: 1px;
    }
    
    .content h2,
    .content h3 {
        font-size: 150%;
        margin: 20px 0;
    }
    
    .content p {
        color: #555;
        line-height: 30px;
        letter-spacing: 1.2px;
    }
`

export default StickyNavbar

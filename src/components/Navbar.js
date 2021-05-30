import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

const Container = ({ className, Pages }) => {
    let location = useLocation();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={className}>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={() => {
                            closeMobileMenu();
                        }}>
                            <ImHome className='navbar-icon' />
                        </Link>
                        <div className="navbar-title">{location.pathname === "/" ? "Home" : location.pathname.substring(1)}</div>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            {
                                Pages.map(({ title }, i) => {
                                    return <li key={i} className='nav-item'>
                                        <Link
                                            to={`/${title}`}
                                            className='nav-links'
                                            onClick={() => {
                                                closeMobileMenu();
                                            }}
                                        >
                                            <span className='nav-links-num'>{i + 1}.</span>
                                            <span className='nav-links-title'>{title}</span>
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

const Navbar = styled(Container)`
    & {
        background: #1c2237;
        height: 80px;
        display: flex;
        font-size: 1.2rem;
        position: fixed;
        width: 100%;
        z-index: 999;
    }

    .navbar-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
    }

    .navbar-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 2rem;
        color: #fff;
    }

    .navbar-title {
        font-size: 2rem;
        color: #fff;
    }

    .menu-icon {
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
    }

    .navbar-logo:hover, .menu-icon:hover {
        transform: scale(1.2);
        transition: all 0.3s ease;
    }

    .nav-menu {
        overflow-y: auto;
        width: 25rem;
        height: calc(100vh - 80px);
        position: absolute;
        top: 80px;
        left: -100%;
        transition: all 0.5s ease;
    }

    .nav-menu::-webkit-scrollbar {
        display: none;
    }

    .nav-menu.active {
        background: #1c2237;
        left: 0;
        z-index: 999;
    }

    .nav-item {
        width: 100%;
        overflow: hidden;
    }

    .nav-links {
        color: #fff;
        text-decoration: none;
        padding: 1rem;
        width: 100%;
        display: flex;
    }

    .nav-links:hover {
        background-color: #f00946;
        color: #fff;
        transform-origin: left;
        transform: scale(1.2);
        transition: all 0.3s ease;
    }

    .nav-links-num{
        width:30px;
    }

    @media (max-width: 576px) {
        .nav-menu {
            width: 100%;
        }

        .navbar-title {
            font-size: 1rem;
            max-width: 10rem;
            overflow-wrap: break-word;
        }
    }

`

export default Navbar;

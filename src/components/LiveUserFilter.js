import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const res = await fetch('https://randomuser.me/api?results=50');
        const { results } = await res.json();
        setUsers(results.map(({
            picture: { large },
            name: { first, last },
            location: { city, country }
        }, i) => {
            return { large, first, last, city, country, hide: false }
        }));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={className}>
            <div className="container">
                <header className="header">
                    <h4 className="title">Live User Filter</h4>
                    <small className="subtitle">Search by name and/or location</small>
                    <input type="text" placeholder="Search" onChange={(e) => {
                        let value = e.target.value.toLowerCase();
                        let item = [...users];
                        item.forEach(({ large, first, last, city, country }, i) => {
                            if (!(large + " " + first + " " + last + " " + city + " " + country).toLowerCase().includes(value)) {
                                item[i].hide = true;
                            } else {
                                item[i].hide = false;
                            }
                        });
                        setUsers(item);
                    }} />
                </header>

                <ul className="user-list">
                    {
                        users.map(({ hide, large, first, last, city, country }, i) => {
                            return <li key={i} className={hide ? "hide" : ""}>
                                <img src={large} alt={first} />
                                <div className="user-info">
                                    <h4>{`${first} ${last}`}</h4>
                                    <p>{`${city}, ${country}`}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const LiveUserFilter = styled(Container)`
    & {
        background-color: #f8f9fd;
        font-family: 'Roboto', sans-serif;
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
        border-radius: 5px;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        width: 300px;
    }
    
    .title {
        margin: 0;
    }
    
    .subtitle {
        display: inline-block;
        margin: 5px 0 20px;
        opacity: 0.8;
    }
    
    .header {
        background-color: #3e57db;
        color: #fff;
        padding: 30px 20px;
    }
    
    .header input {
        background-color: rgba(0, 0, 0, 0.3);
        border: 0;
        border-radius: 50px;
        color: #fff;
        font-size: 14px;
        padding: 10px 15px;
        width: 100%;
    }
    
    .header input:focus {
        outline: none;
    }
    
    .user-list {
        background-color: #fff;
        list-style-type: none;
        margin: 0;
        padding: 0;
        max-height: 400px;
        overflow-y: auto;
    }
    
    .user-list li {
        display: flex;
        padding: 20px;
    }
    
    .user-list img {
        border-radius: 50%;
        object-fit: cover;
        height: 50px;
        width: 50px;
    }
    
    .user-list .user-info {
        margin-left: 10px;
    }
    
    .user-list .user-info h4 {
        margin: 0 0 10px;
    }
    
    .user-list .user-info p {
        font-size: 12px;
    }
    
    .user-list li:not(:last-of-type) {
        border-bottom: 1px solid #eee;
    }
    
    .user-list li.hide {
        display: none;
    }
`

export default LiveUserFilter

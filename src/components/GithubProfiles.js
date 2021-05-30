import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const APIURL = "https://api.github.com/users/";

    const [search, setSearch] = useState("");
    const [user, setUser] = useState();
    const [notFound, setNotFound] = useState(true);

    const Search = async (username) => {
        let res = await fetch(APIURL + username);
        if (res.status === 200) {
            const {
                avatar_url,
                name,
                bio,
                followers,
                following,
                public_repos } = await res.json();
            res = await fetch(APIURL + username + "/repos?sort=created");
            let data = await res.json();
            setUser({
                avatar_url: avatar_url,
                name: name,
                bio: bio,
                followers: followers,
                following: following,
                public_repos: public_repos,
                repos: data.slice(0, 5).map(({ html_url, name }, i) => {
                    return { html_url, name }
                })
            });
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    }

    useEffect(() => {

    }, []);

    return (
        <div className={className}>
            <div className="user-form">
                <input type="text" value={search} placeholder="Search a Github User"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            Search(search);
                            setSearch("");
                        }
                    }} />
            </div>
            <main id="main">
                <div className="card">
                    {
                        notFound ?
                            <h1>No profile with this username</h1> :
                            <>
                                <div>
                                    <img src={user.avatar_url} alt={user.name} className="avatar" />
                                </div>
                                <div className="user-info">
                                    <h2>{user.name}</h2>
                                    <p>{user.bio}</p>
                                    <ul>
                                        <li>{user.followers} <strong>Followers</strong></li>
                                        <li>{user.following} <strong>Following</strong></li>
                                        <li>{user.public_repos} <strong>Repos</strong></li>
                                    </ul>

                                    <div>
                                        {
                                            user.repos.map(({ html_url, name }, i) => {
                                                return <a key={i} className="repo" href={html_url} target="_blank" rel="noreferrer">
                                                    {name}
                                                </a>
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </main>
        </div>
    )
}

const GithubProfiles = styled(Container)`
    & {
        background-color: #2a2a72;
        color: #fff;
        font-family: 'Poppins', sans-serif;
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

    h2 {
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    .user-form {
        width: 100%;
        max-width: 700px;
    }
    
    .user-form input {
        width: 100%;
        display: block;
        background-color: #4c2885;
        border: none;
        border-radius: 10px;
        color: #fff;
        padding: 1rem;
        margin-bottom: 2rem;
        font-family: inherit;
        font-size: 1rem;
        box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
        0 15px 40px rgba(0, 0, 0, 0.1);
    }
    
    .user-form input::placeholder {
        color: #bbb;
    }
    
    .user-form input:focus {
        outline: none;
    }
    
    .card {
        max-width: 800px;
        background-color: #4c2885;
        border-radius: 20px;
        box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
        0 15px 40px rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 3rem;
        margin: 0 1.5rem;
    }
    
    .avatar {
        border-radius: 50%;
        border: 10px solid #2a2a72;
        height: 150px;
        width: 150px;
    }
    
    .user-info {
        color: #eee;
        margin-left: 2rem;
    }
    
    .user-info h2 {
        margin-top: 0;
    }
    
    .user-info ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
        max-width: 400px;
    }
    
    .user-info ul li {
        display: flex;
        align-items: center;
    }
    
    .user-info ul li strong {
        font-size: 0.9rem;
        margin-left: 0.5rem;
    }
    
    .repo {
        text-decoration: none;
        color: #fff;
        background-color: #212a72;
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        display: inline-block;
    }
    
    @media (max-width: 500px) {
        .card {
        flex-direction: column;
        align-items: center;
        }
    
        .user-form {
        max-width: 400px;
        }
    }
`

export default GithubProfiles

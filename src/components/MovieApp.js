import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const getClassByRate = (vote) => {
        if (vote >= 8) {
            return "green"
        } else if (vote >= 5) {
            return "orange"
        } else {
            return "red"
        }
    }

    const getMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies(API_URL);
    }, []);
    return (
        <div className={className}>
            <header>
                <input type="text" className="search" value={search} placeholder="Search" onChange={(e) => {
                    setSearch(e.target.value);
                }} onKeyUp={(e) => {
                    if (e.keyCode === 13 && e.target.value) {
                        getMovies(SEARCH_API + search);
                        setSearch("");
                    }
                }} />
            </header>
            <main>
                {
                    movies.map(({ title, poster_path, vote_average, overview }, i) => {
                        return <div key={i} className="movie">
                            <img src={IMG_PATH + poster_path} alt={title} />
                            <div className="movie-info">
                                <h3>{title}</h3>
                                <span className={getClassByRate(vote_average)}>{vote_average}</span>
                            </div>
                            <div className="overview">
                                <h3>Overview</h3>
                                {overview}
                            </div>
                        </div>
                    })
                }
            </main>
        </div>
    )
}

const MovieApp = styled(Container)`
    & {
        background-color: #22254b;
        font-family: 'Poppins', sans-serif;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
        overflow-y: auto;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    
    header {
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
        background-color: #373b69;
    }
    
    .search {
        background-color: transparent;
        border: 2px solid #22254b;
        border-radius: 50px;
        font-family: inherit;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        color: #fff;
    }
    
    .search::placeholder {
        color: #7378c5;
    }
    
    .search:focus {
        outline: none;
        background-color: #22254b;
    }
    
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .movie {
        width: 300px;
        margin: 1rem;
        background-color: #373b69;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
        border-radius: 3px;
    }
    
    .movie img {
        width: 100%;
    }
    
    .movie-info {
        color: #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem 1rem;
        letter-spacing: 0.5px;
    }
    
    .movie-info h3 {
        margin-top: 0;
    }
    
    .movie-info span {
        background-color: #22254b;
        padding: 0.25rem 0.5rem;
        border-radius: 3px;
        font-weight: bold;
    }
    
    .movie-info span.green {
        color: lightgreen;
    }
    
    .movie-info span.orange {
        color: orange;
    }
    
    .movie-info span.red {
        color: red;
    }
    
    .overview {
        background-color: #fff;
        padding: 2rem;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        max-height: 100%;
        transform: translateY(101%);
        overflow-y: auto;
        transition: transform 0.3s ease-in;
    }
    
    .movie:hover .overview {
        transform: translateY(0);
    }
`

export default MovieApp

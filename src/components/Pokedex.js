import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const IMG_URL = "https://pokeres.bastionbot.org/images/pokemon/";
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
const main_types = Object.keys(colors);

const Container = ({ className }) => {


    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        let datas = [];
        for (let i = 1; i <= 150; i++) {
            const res = await fetch(API_URL + i);
            const { name, id, types } = await res.json();
            let poke_types = types.map(type => type.type.name);
            let type = main_types.find(type => poke_types.indexOf(type) > -1);
            datas.push({
                name: name[0].toUpperCase() + name.slice(1),
                orgId: id,
                id: id.toString().padStart(3, "0"),
                type: type,
                color: colors[type]
            });
        }
        setPokemons(datas);
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <div className={className}>
            <h1>Pokedex</h1>
            <div className="poke-container">
                {
                    pokemons.map(({ orgId, id, name, type, color }, i) => {
                        return <div key={i} className="pokemon" style={{ backgroundColor: color }}>
                            <div className="img-container">
                                <img src={IMG_URL + orgId + ".png"} alt="" />
                            </div>
                            <div className="info">
                                <span className="number">#{id}</span>
                                <h3 className="name">{name}</h3>
                                <small className="type">Type: <span>{type}</span></small>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

const Pokedex = styled(Container)`
    & {
        background: #efefbb;
        background: linear-gradient(to right, #d4d3dd, #efefbb);
        font-family: 'Lato', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        margin: 0;
        overflow-y: scroll;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    
    h1 {
        letter-spacing: 3px;
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    
    .poke-container {
        display: flex;
        flex-wrap: wrap;
        align-items: space-between;
        justify-content: center;
        position: absolute;
        top: 0;
        margin: 80px auto;
        max-width: 1200px;
    }
    
    .pokemon {
        background-color: #eee;
        border-radius: 10px;
        box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
        margin: 10px;
        padding: 20px;
        text-align: center;
    }
    
    .pokemon .img-container {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        text-align: center;
    }
    
    .pokemon .img-container img {
        max-width: 90%;
        margin-top: 20px;
    }
    
    .pokemon .info {
        margin-top: 20px;
    }
    
    .pokemon .info .number {
        background-color: rgba(0, 0, 0, 0.1);
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 0.8em;
    }
    
    .pokemon .info .name {
        margin: 15px 0 7px;
        letter-spacing: 1px;
    }
`

export default Pokedex

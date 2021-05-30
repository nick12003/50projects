import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Seat = ({ row, col, occupied, ticketHandle }) => {
    const [book, setBook] = useState(false);
    return (
        <div
            key={col}
            className={`seat ${occupied ? "occupied" : ""} ${book ? "selected" : ""}`}
            onClick={() => {
                if (!occupied) {
                    ticketHandle(book ? "return" : "book", { row, col });
                    setBook(!book);
                }
            }}>
        </div>
    )
}

const Container = ({ className }) => {
    const [seats, setSeats] = useState([]);
    const [tickets, setTickets] = useState([]);

    const occupied = () => {
        return Math.floor(Math.random() * 10) === 0;
    }
    const ticketHandle = (type, seat) => {
        if (type === "book") {
            setTickets([...tickets, seat]);
        }

        if (type === "return") {
            let items = [...tickets];
            let { row: Row, col: Col } = seat;
            items.forEach(({ row, col }, index) => {
                if (row === Row && col === Col) {
                    items.splice(index, 1);
                }
            });
            setTickets(items);
        }
    }

    useEffect(() => {
        setSeats(Array(6).fill().map((row, i) => {
            return Array(8).fill().map((col, j) => {
                return occupied();
            })
        }))
    }, []);

    return (
        <div className={className}>
            <div className="movie-container">
                <label>復仇者聯盟：終局之戰</label>
            </div>

            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>可選</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>已選</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>不可選</small>
                </li>
            </ul>

            <div className="container">
                <div className="screen"></div>
                {
                    seats.map((row, i) => {
                        return <div key={i} className="row">
                            {
                                seats[i].map((col, j) => {
                                    return <Seat key={j} row={i} col={j} occupied={col} ticketHandle={ticketHandle} />
                                })
                            }
                        </div>
                    })
                }
            </div>
            <p className="text">
                您一共訂購 <span>{tickets.length}</span> 張票，總共是 <span>{tickets.length * 220}</span> 元
            </p>
        </div>
    )
}

const MovieSeatBooking = styled(Container)`
    & {
        background-color: #242333;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        font-family: 'Lato', sans-serif;
        margin: 0;
    }
    
    .movie-container {
        margin: 20px 0;
    }
    
    .movie-container select {
        background-color: #fff;
        border: 0;
        border-radius: 5px;
        font-size: 14px;
        margin-left: 10px;
        padding: 5px 15px 5px 15px;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }
    
    .container {
        perspective: 1000px;
        margin-bottom: 30px;
    }
    
    .seat {
        background-color: #444451;
        height: 12px;
        width: 15px;
        margin: 3px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    
    .seat.selected {
        background-color: #6feaf6;
    }
    
    .seat.occupied {
        background-color: #ff0000;
    }
    
    .seat:nth-of-type(2) {
        margin-right: 18px;
    }
    
    .seat:nth-last-of-type(2) {
        margin-left: 18px;
    }
    
    .seat:not(.occupied):hover {
        cursor: pointer;
        transform: scale(1.2);
    }
    
    .showcase .seat:not(.occupied):hover {
        cursor: default;
        transform: scale(1);
    }
    
    .showcase {
        background: rgba(0, 0, 0, 0.1);
        padding: 5px 10px;
        border-radius: 5px;
        color: #777;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    }
    
    .showcase li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
    }
    
    .showcase li small {
        margin-left: 2px;
    }
    
    .row {
        display: flex;
    }
    
    .screen {
        background-color: #fff;
        height: 70px;
        width: 100%;
        margin: 15px 0;
        transform: rotateX(-45deg);
        box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
    }
    
    p.text {
        margin: 5px 0;
    }
    
    p.text span {
        color: #6feaf6;
    }
`

export default MovieSeatBooking;

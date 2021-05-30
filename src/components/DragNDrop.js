import React, { useState } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const [container, setContainer] = useState(0);
    const [dragIn, setDragIn] = useState(null);
    const [drag, setDrag] = useState(false);

    return (
        <div className={className}>
            {
                Array(5).fill().map((item, i) => {
                    return <div key={i}
                        className={`empty ${dragIn === i ? "hovered" : ""}`}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setDragIn(i);
                        }}
                        onDragEnter={(e) => {
                            setDragIn(i);
                        }}
                        onDragLeave={(e) => {
                            setDragIn(null);
                        }}
                        onDrop={(e) => {
                            setContainer(i);
                        }}>
                        {
                            i === container ?
                                <div className={`fill ${drag ? "hold" : ""}`} draggable="true"
                                    onDragStart={(e) => {
                                        setDrag(true);
                                    }}
                                    onDragEnd={(e) => {
                                        setDrag(false);
                                        setDragIn(null);
                                    }}>

                                </div> :
                                ""
                        }
                    </div>
                })
            }
        </div>
    )
}

const DragNDrop = styled(Container)`
    & {
        background-color: steelblue;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }
    
    .empty {
        height: 150px;
        width: 150px;
        margin: 10px;
        border: solid 3px black;
        background: white;
    }
    
    .fill {
        background-image: url('https://source.unsplash.com/random/150x150');
        height: 145px;
        width: 145px;
        cursor: pointer;
    }
    
    .hold {
        border: solid 5px #ccc;
    }
    
    .hovered {
        background-color: #333;
        border-color: white;
        border-style: dashed;
    }
    
    @media (max-width: 800px) {
        & {
            flex-direction: column;
        }
    }
`

export default DragNDrop
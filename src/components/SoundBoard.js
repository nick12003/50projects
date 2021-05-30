import React, { createRef } from 'react'
import styled from 'styled-components';

const Container = ({ className }) => {
    const soundUrl = "https://50projects50days.com/projects/sound-board/sounds/";
    let files = [
        { file: "applause" },
        { file: "boo" },
        { file: "gasp" },
        { file: "tada" },
        { file: "victory" },
        { file: "wrong" }
    ].map((file, i) => {
        return { ...file, ref: createRef() }
    })

    return (
        <div className={className}>
            {
                files.map(({ file, ref }, i) => {
                    return <audio key={i} src={`${soundUrl + file}.mp3`} ref={ref}></audio>
                })
            }
            <div id="buttons">
                {
                    files.map(({ file }, i) => {
                        return <button key={i} className="btn" onClick={() => {
                            files.forEach(({ ref }) => {
                                ref.current.pause();
                                ref.current.currentTime = 0;
                            });
                            files.filter(i => {
                                return i.file === file;
                            })[0].ref.current.play();
                        }}>
                            {file}
                        </button>
                    })
                }
            </div>
        </div>
    )
}

const SoundBoard = styled(Container)`
    & {
        background-color: rgb(161, 100, 223);
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: calc(100vh - 80px);
        position: relative;
        top: 80px;
        overflow: hidden;
        margin: 0;
    }

    .btn {
        background-color: rebeccapurple;
        border-radius: 5px;
        border: none;
        color: #fff;
        margin: 1rem;
        padding: 1.5rem 3rem;
        font-size: 1.2rem;
        font-family: inherit;
        cursor: pointer;
    }

    .btn:hover {
        opacity: 0.9;
    }

    .btn:focus {
        outline: none;
    }
`

export default SoundBoard

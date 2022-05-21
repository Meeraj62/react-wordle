import React from 'react'

export default function Row({ guess }) {

    if (guess) {
        return (
            <div className="row pastGuess">
                {guess.map((letter, index) => {
                    return (
                        <div className={letter.color} key={index}>
                            {letter.letter}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

import React from 'react'

export default function Row({ guess, currentGuess, isCorrect }) {

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

    if (currentGuess) {
        let currentGuessArray = currentGuess.split('');
        return (
            <div className="row currentGuess">
                {
                    currentGuessArray.map((letter, index) => (
                        <div className="filled" key={index}>
                            {letter}
                        </div>
                    ))
                }

                {[...Array(5 - currentGuessArray.length)].map((letter, index) => (
                    <div className="empty" key={index}>

                    </div>
                ))}

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

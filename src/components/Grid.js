import React from 'react'
import Row from './Row'

export default function Grid({ guesses, turn, currentGuess, isCorrect }) {
    return (
        <div>
            {guesses.map((guess, index) => {

                // if the turn is the same as the index, display the current guess
                if (turn === index) {
                    return <Row currentGuess={currentGuess} key={index} />
                }

                return <Row key={index} guess={guess} />
            })}
        </div>
    )
}

import React from 'react'
import Row from './Row'

export default function Grid({ guesses, turn, currentGuess, isCorrect }) {
    return (
        <div>
            {guesses.map((guess, index) => {
                return <Row key={index} guess={guess} turn={turn} currentGuess={currentGuess} isCorrect={isCorrect} />
            })}
        </div>
    )
}

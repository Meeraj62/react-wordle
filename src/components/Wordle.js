import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';

function Wordle({ solution }) {

    const { currentGuess, guesses, turn, isCorrect, handleKeyUp } = useWordle(solution);

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyUp]);

    return (
        <>
            <div>Solution is: {solution.word}</div>
            <div>Current Guess is: {currentGuess}</div>

            <Grid guesses={guesses} turn={turn} currentGuess={currentGuess} isCorrect={isCorrect} />

            <Keypad />
        </>
    )
}

export default Wordle
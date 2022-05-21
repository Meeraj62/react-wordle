import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';

function Wordle({ solution }) {

    const { currentGuess, handleKeyUp } = useWordle(solution);

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyUp]);

    return (
        <div>Solution is: {currentGuess}</div>
    )
}

export default Wordle
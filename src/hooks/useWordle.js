import { useState } from 'react'

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    // format a guess into an array of letter objects
    // e.g. 'hello' => [{letter: 'h', color: 'green'}, {letter: 'e', color: 'green'}, {letter: 'l', color: 'green'}, {letter: 'l', color: 'green'}, {letter: 'o', color: 'green'}]
    const formatGuess = () => {

    }

    // add a new guess to the guesses array
    // update the isCorrect state if the guess is correct
    // update the turn state
    const addNewGuess = () => {

    }

    // handle keypresses
    // if the key is a letter then add it to the current guess
    // if the key is delete then remove the last letter from the current guess
    // if the key is enter then add the current guess to the guesses array
    const handleKeyPress = () => {

    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyPress }


}


export default useWordle
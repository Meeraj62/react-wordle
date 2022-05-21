import { useState } from 'react'

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState(['hello']);
    const [isCorrect, setIsCorrect] = useState(false);

    // format a guess into an array of letter objects
    // e.g. 'hello' => [{letter: 'h', color: 'green'}, {letter: 'e', color: 'green'}, {letter: 'l', color: 'green'}, {letter: 'l', color: 'green'}, {letter: 'o', color: 'green'}]
    const formatGuess = () => {
        console.log("Current Guess: ", currentGuess);
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
    const handleKeyUp = ({ key }) => {

        if (key === 'Enter') {
            // check the length if it is equal to 5
            if (currentGuess.length !== 5) {
                console.log("The word must be exactly 5 chars long...");
                return;
            }
            // check if the word is a duplicate word
            if (history.includes(currentGuess)) {
                console.log("Duplicated words are not allowed...");
                return;
            }

            formatGuess();
        }

        if (key === 'Backspace') {
            setCurrentGuess((previous) => {
                return previous.slice(0, -1);
            })
            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((previous) => {
                    return previous + key;
                })
            }
        }

    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyUp }


}


export default useWordle
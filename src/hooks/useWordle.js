import { useState } from 'react'

import { toast } from 'react-toastify';

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    // format a guess into an array of letter objects
    // e.g. 'hello' => [{letter: 'h', color: 'green'}, {letter: 'e', color: 'green'}, {letter: 'l', color: 'green'}, {letter: 'l', color: 'green'}, {letter: 'o', color: 'green'}]
    const formatGuess = () => {
        let solutionArray = [...solution.word];

        let formattedGuess = [...currentGuess].map((letter, index) => {
            return { letter: letter, color: 'grey' };
        });

        // if the letter of formattedGuess is not at exact index to that of solutionArray but the letter is present, make the color yellow
        formattedGuess.forEach((l, index) => {
            if (solutionArray.includes(l.letter)) {
                l.color = 'yellow';
                solutionArray[solutionArray.indexOf(l.index)] = null;
            }
        })

        // if the letter of formattedGuess is at exact index to that of solutionArray, make the color green
        formattedGuess.forEach((l, index) => {
            if (solutionArray[index] === l.letter) {
                l.color = 'green';
                solutionArray[index] = null;
            }
        })

        return formattedGuess;

    }

    // add a new guess to the guesses array
    // update the isCorrect state if the guess is correct
    // update the turn state
    const addNewGuess = (formatted) => {
        // if current guess is already the solution
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        // save guesses to the setGuesses 
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formatted
            return newGuesses
        })

        //save guesses to history
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        })

        // update Turn
        setTurn((prevTurn) => {
            return prevTurn + 1;
        })

        // empty the current guess for the new row
        setCurrentGuess('')

    }

    // handle keypresses
    // if the key is a letter then add it to the current guess
    // if the key is delete then remove the last letter from the current guess
    // if the key is enter then add the current guess to the guesses array
    const handleKeyUp = ({ key }) => {

        if (key === 'Enter') {

            // check if the turn has exceeded
            if (turn > 5) {
                toast.error('5 choti haanis ta bhai...')
                return;
            }

            // check the length if it is equal to 5
            if (currentGuess.length !== 5) {
                toast.error('5 chars maatrai hunchha bhai...');
                return;
            }

            // check if the word is a duplicate word
            if (history.includes(currentGuess)) {
                toast.error('Eutai galti feri nagarna bhai...');
                return;
            }


            const formatted = formatGuess();
            addNewGuess(formatted)
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
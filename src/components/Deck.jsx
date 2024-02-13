import { useState, useEffect } from 'react';
import '../styles/Deck.css'
import PropTypes from 'prop-types'
import Card from './Card'

// Function that shuffles an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // elements are swapped
  }
}

function Deck({deck, score, setScore, isGameOver, setIsGameOver, setIsWinner}) {

  // State variable with the array of characters player has clicked (only ids are stored)
  const [clickedCharacters, setClickedCharacters] = useState([])

  // State variable that controls if the card is flipped or not
  const [isFlipped, setIsFlipped] = useState(true)

  // Function that handles the click event on a card
  const handleClick = (id) => {
    // If the character has not been clicked, add it to the clickedCharacters array and increment the score
    if (!clickedCharacters.includes(id)) {
        setClickedCharacters([...clickedCharacters, id])
        setScore(score + 1)
        setIsFlipped(true)
        // If the score is equal to the deck size, the player has won
        if (score + 1 === deck.length) {
          setIsWinner(true)
          setIsGameOver(true)
        }
    } else { // Otherwise, reset the score and the clickedCharacters array
        setScore(0)
        setClickedCharacters([])
        setIsGameOver(true)
        setIsFlipped(true)
    }
  }

  // Shuffling the deck array when the game continues
  if (!isGameOver) {shuffleArray(deck);}

  // Effect that resets the isFlipped state variable after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      !isGameOver && setIsFlipped(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, [isFlipped, isGameOver]);

  return (
    <div id='deck'>
        {deck.map(character => (
            <Card 
                key={character.id} 
                id={character.id} 
                name={character.name} 
                image={character.image} 
                onClick={handleClick} 
                isFlipped={isFlipped}
            />
        ))}
    </div>
  )
}

Deck.propTypes = {
  deck: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
  setIsWinner: PropTypes.func.isRequired
}

export default Deck
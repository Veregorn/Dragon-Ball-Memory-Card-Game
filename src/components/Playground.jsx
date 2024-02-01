import '../styles/Playground.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Deck from './Deck'
import InfoPanel from './InfoPanel'

function Playground({
    difficultyLevel,
    score,
    setScore,
    setIsGameOver
}) {

  // State variables for API data management
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Constants and variables
  const deck = []
  let deckSize = 0 // Size of the deck
  let randomIndex = 0 // Random index that will be used to select a character from the characters array

  // Setting the deck size based on the difficulty level
  if (difficultyLevel === 'Easy') {
    deckSize = 5
  } else if (difficultyLevel === 'Medium') {
    deckSize = 10
  } else {
    deckSize = 18
  }

  // Creating an array with the API data, only need the id, name and image
  const characters = []
  if (data) {
    data.items.forEach(character => {
      characters.push({
        id: character.id,
        name: character.name,
        image: character.image
      })
    })
  }

  // Loop that will randomly select characters from the characters array and push them into the deck array
  for (let i = 0; i < deckSize; i++) {
    randomIndex = Math.floor(Math.random() * characters.length)
    deck.push(characters[randomIndex])
    characters.splice(randomIndex, 1)
  }

  // API call function that will be called in useEffect
  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://dragonball-api.com/api/characters?page=1&limit=100')
        if (!response.ok) {
          throw new Error('HTTP Error! Status: ' + response.status)
        }
        const result = await response.json()
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

  }, []);

  return (
    <main>
      <div id='playground-container'>
        <div id='playground'>
          {/* If there is an error, render an error message */}
          {error && <p>{error}</p>}
          {/* If data is still loading, render a loading message, otherwise render the API data */}
          {isLoading ? <p>Loading...</p> : <><InfoPanel score={score} difficultyLevel={difficultyLevel} /><Deck deck={deck} score={score} setScore={setScore} setIsGameOver={setIsGameOver} /></>}
        </div>
      </div>
    </main>
  )
}

Playground.propTypes = {
  difficultyLevel: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired
}

export default Playground
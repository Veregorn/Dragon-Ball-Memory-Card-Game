import { useState, useEffect } from 'react'
import '../styles/App.css'
import Header from './Header'
import Playground from './Playground'
import SelectPanel from './SelectPanel'
import Footer from './Footer'
import Video from './Video'
import GameOver from './GameOver'

function App() {

  // State that controls the difficulty level of the game
  const [difficultyLevel, setDifficultyLevel] = useState('')

  // State that controls the score of the game
  const [score, setScore] = useState(0)

  // State that controls the high score of the game
  const [highScore, setHighScore] = useState(0)

  // State that controls if the game is over or not
  const [isGameOver, setIsGameOver] = useState(false)

  // State that controls if tha player has won or not
  const [isWinner, setIsWinner] = useState(false)

  // State that controls the API data
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // State that controls the deck of characters
  const [deck, setDeck] = useState([])
  const [deckSize, setDeckSize] = useState(0)

  // deckSize is set based on the difficulty level
  const handleDifficultyLevel = (level) => {
    setDifficultyLevel(level)
    if ((level === 'Easy') && (deckSize !== 5)) {
      setDeckSize(5)
    } else if ((level === 'Medium') && (deckSize !== 10)) {
      setDeckSize(10)
    } else if ((level === 'Hard') && (deckSize !== 18)){
      setDeckSize(18)
    }
  }

  // If the current score is greater than the high score, set the high score to the current score
  if (score > highScore) {
    setHighScore(score)
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

    let randomIndex = 0 // Random index that will be used to select a character from the characters array
    const auxDeck = [] // Auxiliary array that will be used to store the characters that will be pushed into the deck array

    // Loop that will randomly select characters from the characters array and push them into the deck array
    for (let i = 0; i < deckSize; i++) {
      randomIndex = Math.floor(Math.random() * characters.length)
      auxDeck.push(characters[randomIndex])
      characters.splice(randomIndex, 1)
    }

    // Copying the auxiliary array into the deck
    setDeck(auxDeck)

  }, [deckSize, isGameOver]);

  return (
    <>
      {/* If there is an error, render an error message */}
      {error && <p>{error}</p>}
      {/* If data is still loading, render a loading message, otherwise render the API data */}
      {isLoading && <p>Loading...</p>}
      {/* If the game is over, render the Game Over modal*/}
      {isGameOver ? <GameOver setDifficultyLevel={setDifficultyLevel} setIsGameOver={setIsGameOver} isWinner={isWinner} setIsWinner={setIsWinner} setScore={setScore} setHighScore={setHighScore} /> : <></>}
      {/*If difficulty level is selected, render Header and Playground Components, otherwise render the Select Panel */}
      {difficultyLevel == '' ? <SelectPanel handleDifficultyLevel={handleDifficultyLevel} /> : (<><Header difficultyLevel={difficultyLevel} score={score} highScore={highScore} /><Playground difficultyLevel={difficultyLevel} score={score} setScore={setScore} setIsGameOver={setIsGameOver} setIsWinner={setIsWinner} deck={deck} /></>)}
      <Footer />
      <Video />
    </>
  )
}

export default App

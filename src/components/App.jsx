import { useState } from 'react'
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

  // If the current score is greater than the high score, set the high score to the current score
  if (score > highScore) {
    setHighScore(score)
  }

  return (
    <>
      {/* If the game is over, render the Game Over modal*/}
      {isGameOver ? <GameOver setDifficultyLevel={setDifficultyLevel} setIsGameOver={setIsGameOver} /> : <></>}
      {/*If difficulty level is selected, render Header and Playground Components, otherwise render the Select Panel */}
      {difficultyLevel == '' ? <SelectPanel setDifficultyLevel={setDifficultyLevel} /> : (<><Header difficultyLevel={difficultyLevel} score={score} highScore={highScore} /><Playground difficultyLevel={difficultyLevel} score={score} setScore={setScore} setIsGameOver={setIsGameOver} /></>)}
      <Footer />
      <Video />
    </>
  )
}

export default App

import '../styles/Playground.css'
import PropTypes from 'prop-types'
import Deck from './Deck'
import InfoPanel from './InfoPanel'

function Playground({
    difficultyLevel,
    score,
    setScore,
    isGameOver,
    setIsGameOver,
    setIsWinner,
    deck
}) {

  return (
    <main>
      <div id='playground-container'>
        <div id='playground'>
          <Deck 
            deck={deck} 
            score={score} 
            setScore={setScore} 
            isGameOver={isGameOver} 
            setIsGameOver={setIsGameOver} 
            setIsWinner={setIsWinner} 
          />
          <InfoPanel score={score} difficultyLevel={difficultyLevel} />
        </div>
      </div>
    </main>
  )
}

Playground.propTypes = {
  difficultyLevel: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
  setIsWinner: PropTypes.func.isRequired,
  deck: PropTypes.array.isRequired
}

export default Playground
import '../styles/Playground.css'
import PropTypes from 'prop-types'
import Deck from './Deck'
import InfoPanel from './InfoPanel'

function Playground({
    difficultyLevel,
    score,
    setScore,
    setIsGameOver,
    setIsWinner,
    deck
}) {

  return (
    <main>
      <div id='playground-container'>
        <div id='playground'>
          <InfoPanel score={score} difficultyLevel={difficultyLevel} />
          <Deck deck={deck} score={score} setScore={setScore} setIsGameOver={setIsGameOver} setIsWinner={setIsWinner} />
        </div>
      </div>
    </main>
  )
}

Playground.propTypes = {
  difficultyLevel: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
  setIsWinner: PropTypes.func.isRequired,
  deck: PropTypes.array.isRequired
}

export default Playground
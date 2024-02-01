import '../styles/Scoreboard.css'
import PropTypes from 'prop-types'

function Scoreboard({score, highScore}) {

  return (
    <div id='scoreboard'>
      <p id='score'>Score: {score}</p>
      <p id='high-score'>High Score: {highScore}</p>
    </div>
  )
}

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
}

export default Scoreboard
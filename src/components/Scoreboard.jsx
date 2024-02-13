import '../styles/Scoreboard.css'
import PropTypes from 'prop-types'

function Scoreboard({score, highScore}) {

  return (
    <div id='scoreboard'>
      <h2 id='score'>Score: {score}</h2>
      <h2 id='high-score'>High Score: {highScore}</h2>
    </div>
  )
}

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
}

export default Scoreboard
import '../styles/Header.css'
import PropTypes from 'prop-types'
import logo from '../../public/images/dbz-logo-small.png'
import Scoreboard from './Scoreboard'

function Header({
    difficultyLevel,
    score,
    highScore
}) {

  return (
    <header className='header'>
      <img id='small-logo' src={logo} alt='Dragon Ball Logo' />
      <h2 id='level-selected'>Level: {difficultyLevel}</h2>
      <Scoreboard score={score} highScore={highScore} />
    </header>
  )
}

Header.propTypes = {
  difficultyLevel: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
}

export default Header
import '../styles/GameOver.css'
import PropTypes from 'prop-types'

function GameOver({setDifficultyLevel, setIsGameOver, isWinner, setIsWinner, setScore, setHighScore}) {
    const handlePlayAgain = () => {
        setIsWinner(false)
        setIsGameOver(false)
        setScore(0)
    }

    const handleMainMenu = () => {
        setIsWinner(false)
        setDifficultyLevel('')
        setIsGameOver(false)
        setScore(0)
        setHighScore(0)
    }
    
    return (
        <div id='game-over-popup'>
            <div className='game-over-popup-content'>
                {isWinner ? <h1 id='game-over-title'>Congratulations!</h1> : <h1 id='game-over-title'>Game Over!</h1>}
                {isWinner ? <h2 id='game-over-subtitle'>You have won the game!</h2> : <h2 id='game-over-subtitle'>Better luck next time!</h2>}
                <button id='play-again-button' onClick={handlePlayAgain}>Play Again</button>
                <button id='main-menu-button' onClick={handleMainMenu}>Main Menu</button>
            </div>
        </div>
    )
}

GameOver.propTypes = {
    setDifficultyLevel: PropTypes.func.isRequired,
    setIsGameOver: PropTypes.func.isRequired,
    isWinner: PropTypes.bool.isRequired,
    setIsWinner: PropTypes.func.isRequired,
    setScore: PropTypes.func.isRequired,
    setHighScore: PropTypes.func.isRequired
}

export default GameOver
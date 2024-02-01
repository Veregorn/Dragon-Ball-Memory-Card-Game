import '../styles/GameOver.css'
import PropTypes from 'prop-types'

function GameOver({setDifficultyLevel, setIsGameOver}) {
    const handlePlayAgain = () => {
        setIsGameOver(false)
    }

    const handleMainMenu = () => {
        setDifficultyLevel('')
        setIsGameOver(false)
    }
    
    return (
        <div id='game-over-popup'>
            <div className='game-over-popup-content'>
                <h1 id='game-over-title'>Game Over!</h1>
                <h2 id='game-over-subtitle'>Better luck next time!</h2>
                <button id='play-again-button' onClick={handlePlayAgain}>Play Again</button>
                <button id='main-menu-button' onClick={handleMainMenu}>Main Menu</button>
            </div>
        </div>
    )
}

GameOver.propTypes = {
    setDifficultyLevel: PropTypes.func.isRequired,
    setIsGameOver: PropTypes.func.isRequired
}

export default GameOver
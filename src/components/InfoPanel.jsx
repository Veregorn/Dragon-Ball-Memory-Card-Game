import '../styles/InfoPanel.css'
import PropTypes from 'prop-types'

function InfoPanel({score, difficultyLevel}) {
    return (
        <div id='info-panel'>
            <h3>Num of cards selected </h3>
            <h3>{score}</h3>
            <h3>/</h3>
            <h3>{difficultyLevel === 'Easy' ? 5 : difficultyLevel === 'Medium' ? 10 : 18}</h3>
            <h3>Num of cards needed to win</h3>
        </div>
    )
}

InfoPanel.propTypes = {
    score: PropTypes.number.isRequired,
    difficultyLevel: PropTypes.string.isRequired
}

export default InfoPanel
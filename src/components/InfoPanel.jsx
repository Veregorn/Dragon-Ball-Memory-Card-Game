import '../styles/InfoPanel.css'
import PropTypes from 'prop-types'

function InfoPanel({score, difficultyLevel}) {
    return (
        <div id='info-panel'>
            <p className='info-text'>Num of cards selected: </p>
            <p className='info-num'>{score}</p>
            <p className='info-text'>/</p>
            <p className='info-num'>{difficultyLevel === 'Easy' ? 5 : difficultyLevel === 'Medium' ? 10 : 18}</p>
            <p className='info-text'> :Num of cards needed to win</p>
        </div>
    )
}

InfoPanel.propTypes = {
    score: PropTypes.number.isRequired,
    difficultyLevel: PropTypes.string.isRequired
}

export default InfoPanel
import '../styles/Button.css'
import PropTypes from 'prop-types'

function Button(props) {
    if (props.id === 'music-button') {
        return (
            <button className='button' id={props.id} onClick={props.onClick}>{props.text}</button>
        )
    } else if (props.id.includes('level-button')) {
        return (
            <button className='level-button' id={props.id} onClick={props.onClick}>{props.text}</button>
        )
    }
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button
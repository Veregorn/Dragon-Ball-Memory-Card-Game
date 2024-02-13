import '../styles/Button.css'
import PropTypes from 'prop-types'

function Button(props) {
    return (
        <button className={props.className} id={props.id} onClick={props.onClick}>{props.text}</button>
    )
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button
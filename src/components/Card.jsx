import '../styles/Card.css'
import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className='card'>
            <img 
                src={props.image} 
                alt={props.name} 
                onClick={() => props.onClick(props.id)}
            />
            <p className='character-name'>{props.name}</p>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Card
import '../styles/Card.css'
import PropTypes from 'prop-types'
import Tilt from 'react-parallax-tilt';

function Card(props) {
    return (
        <Tilt 
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="20px"
            flipHorizontally={props.isFlipped}
            transitionSpeed={2500}
            reset> 
                {!props.isFlipped ? <div className='card-front'>
                    <img 
                        src={props.image} 
                        alt={props.name} 
                        onClick={() => props.onClick(props.id)}
                    />
                    <p className='character-name'>{props.name}</p>
                </div> : <div className='card-back'></div>}
        </Tilt>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isFlipped: PropTypes.bool.isRequired
}

export default Card
import '../styles/Footer.css'
import Button from './Button'
import PropTypes from 'prop-types'

function Footer({
    isMusicPlaying,
    setIsMusicPlaying
}) {
    return (
      <footer>
        <Button 
          id='music-button' 
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
          text={isMusicPlaying ? 'Stop Music' : 'Play Music'}
        />
      </footer>
    )
}

Footer.propTypes = {
    isMusicPlaying: PropTypes.bool.isRequired,
    setIsMusicPlaying: PropTypes.func.isRequired
}

export default Footer
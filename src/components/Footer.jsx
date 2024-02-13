import '../styles/Footer.css'
import { useState } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import Sound from 'react-sound'
import backgroundMusic from '../../public/audio/dragon_ball_z_8_bits.mp3'
import Contact from './Contact'
import Help from './Help'

function Footer({
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
}) {

    // State for the music clip that will play when the user clicks the play button
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)

    // State for the help button
    const [isHelpOpen, setIsHelpOpen] = useState(false)

    return (
      <footer>
        <Button
          className={isMusicPlaying ? 'control-button music-playing' : 'control-button music-paused'}
          id='music-button' 
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
          text=''
        />
        <Contact />
        <Button
          className={isHelpOpen ? 'control-button help-opened' : 'control-button help-closed'}
          id='help-button'
          onClick={() => setIsHelpOpen(!isHelpOpen)}
          text=''
        />
        {isHelpOpen && <Help/>}
        <Sound 
          url={backgroundMusic}
          playStatus={isMusicPlaying ? Sound.status.PLAYING : Sound.status.PAUSED} 
          onLoading={handleSongLoading} 
          onPlaying={handleSongPlaying} 
          onFinishedPlaying={handleSongFinishedPlaying} 
          volume={2.8}
          loop={true}
      />
      </footer>
    )
}

Footer.propTypes = {
    handleSongLoading: PropTypes.func,
    handleSongPlaying: PropTypes.func,
    handleSongFinishedPlaying: PropTypes.func
}

export default Footer
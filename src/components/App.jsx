import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import Playground from './Playground'
import SelectPanel from './SelectPanel'
import Footer from './Footer'
import Video from './Video'
import Sound from 'react-sound'
import backgroundMusic from '../../public/audio/dragon_ball_z_8_bits.mp3'
import PropTypes from 'prop-types'

function App({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
}) {

  // State for the music clip that will play when the user clicks the play button
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  return (
    <>
      <Header />
      <Playground />
      <SelectPanel />
      <Footer 
        isMusicPlaying={isMusicPlaying} 
        setIsMusicPlaying={setIsMusicPlaying} 
      />
      <Video />
      <Sound 
        url={backgroundMusic}
        playStatus={isMusicPlaying ? Sound.status.PLAYING : Sound.status.PAUSED} 
        onLoading={handleSongLoading} 
        onPlaying={handleSongPlaying} 
        onFinishedPlaying={handleSongFinishedPlaying} 
        volume={2.8}
        loop={true}
      />
    </>
  )
}

App.propTypes = {
  handleSongLoading: PropTypes.func.isRequired,
  handleSongPlaying: PropTypes.func.isRequired,
  handleSongFinishedPlaying: PropTypes.func.isRequired
}

export default App

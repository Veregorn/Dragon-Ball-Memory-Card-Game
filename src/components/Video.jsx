import '../styles/Video.css'
import kidGokuShenronVideo from '../../public/videos/kid-goku-and-shenron-dragon-ball-moewalls-com.mp4'

function Video() {

  return (
    <video autoPlay loop id='background-video'>
        <source src={kidGokuShenronVideo} type='video/mp4' />
    </video>
  )
}

export default Video
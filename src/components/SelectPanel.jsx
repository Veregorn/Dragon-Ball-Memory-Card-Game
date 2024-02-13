import '../styles/SelectPanel.css'
import PropTypes from 'prop-types'
import logo from '../../public/images/dbz-logo.webp'
import Button from './Button'

function SelectPanel({handleDifficultyLevel}) {

  return (
    <div id='select-panel-container'>
      <img id='big-logo' src={logo} alt='Dragon Ball Logo' />
      <h1 id='main-title'>Memory Card Game</h1>
      <div id='difficulty-levels'>
        <Button className='levelButton' id='easy-level-button' onClick={() => handleDifficultyLevel('Easy')} text='Easy' />
        <Button className='levelButton' id='medium-level-button' onClick={() => handleDifficultyLevel('Medium')} text='Medium' />
        <Button className='levelButton' id='hard-level-button' onClick={() => handleDifficultyLevel('Hard')} text='Hard' />
      </div>
    </div>
  )
}

SelectPanel.propTypes = {
  handleDifficultyLevel: PropTypes.func.isRequired
}

export default SelectPanel
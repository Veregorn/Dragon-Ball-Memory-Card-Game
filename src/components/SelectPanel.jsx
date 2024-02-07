import '../styles/SelectPanel.css'
import PropTypes from 'prop-types'
import logo from '../../public/images/dbz-logo.webp'
import Button from './Button'

function SelectPanel({handleDifficultyLevel}) {

  return (
    <div id='select-panel-container'>
      <img id='big-logo' src={logo} alt='Dragon Ball Logo' />
      <h1 id='main-title'>Memory Game</h1>
      <div id='difficulty-levels'>
        <Button id='easy-level-button' onClick={() => handleDifficultyLevel('Easy')} text='Easy' />
        <Button id='medium-level-button' onClick={() => handleDifficultyLevel('Medium')} text='Medium' />
        <Button id='hard-level-button' onClick={() => handleDifficultyLevel('Hard')} text='Hard' />
      </div>
    </div>
  )
}

SelectPanel.propTypes = {
  handleDifficultyLevel: PropTypes.func.isRequired
}

export default SelectPanel
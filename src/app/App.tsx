import { AppContext } from '@app/context'
import HUD from '@components/hud'
import MainImage from '@components/mainImage'
import StartScreen from '@components/startScreen/StartScreen'
import React, { useContext } from 'react'

import style from './App.module.scss'

const App: React.FC = () => {
  const { currentImage, gameIsStarted } = useContext(AppContext)

  // Add any further image IDs to these props to add them to app
  const gamePlayStart = <StartScreen locationImageIdArr={['robot-city', 'robot-city']} />

  const gamePlayActive = (
    <React.Fragment>
      <MainImage imageURL={currentImage} />
      <HUD />
    </React.Fragment>
  )

  return (
    <div
      className={style.appOverlay}
      style={gameIsStarted ? { minWidth: 900 + 'px' } : { minWidth: 100 + '%' }}
    >
      {gameIsStarted ? gamePlayActive : gamePlayStart}
    </div>
  )
}

export default App

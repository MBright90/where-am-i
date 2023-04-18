import { AppContext } from '@app/context'
import HUD from '@components/hud'
import MainImage from '@components/mainImage'
import StartScreen from '@components/startScreen/StartScreen'
import React, { useContext } from 'react'

import style from './App.module.scss'

const App: React.FC = () => {
  const { currentImage, gameIsStarted } = useContext(AppContext)

  const gamePlayStart = <StartScreen locationImageIdArr={['robot-city']} />

  const gamePlayActive = (
    <React.Fragment>
      <MainImage imageURL={currentImage} />
      <HUD />
    </React.Fragment>
  )

  return <div className={style.appOverlay}>{gameIsStarted ? gamePlayActive : gamePlayStart}</div>
}

export default App

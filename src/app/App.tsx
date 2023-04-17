import { AppContext } from '@app/context'
import robotCity from '@assets/images/robot-city/robot-city.jpg'
import HUD from '@components/hud'
import MainImage from '@components/mainImage'
import StartScreen from '@components/startScreen/StartScreen'
import React, { useContext } from 'react'

import style from './App.module.scss'

const App: React.FC = () => {
  const { gameIsStarted } = useContext(AppContext)

  const gamePlayStart = <StartScreen />

  const gamePlayActive = (
    <React.Fragment>
      <MainImage imageURL={robotCity} />
      <HUD />
    </React.Fragment>
  )

  return <div className={style.appOverlay}>{gameIsStarted ? gamePlayActive : gamePlayStart}</div>
}

export default App

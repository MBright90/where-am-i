import robotCity from '@assets/images/robot-city/robot-city.jpg'
import HUD from '@components/hud'
import MainImage from '@components/mainImage'
import React from 'react'

import style from './App.module.scss'

const gameIsStarted = true

const App: React.FC = () => {
  return (
    <div className={style.appOverlay}>
      <MainImage imageURL={robotCity} />
      {gameIsStarted ? <HUD /> : null}
    </div>
  )
}

export default App

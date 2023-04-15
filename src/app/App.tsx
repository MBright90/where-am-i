import robotCity from '@assets/images/robot-city/robot-city.jpg'
import { Footer, Timer } from '@components/hud'
import MainImage from '@components/mainImage'
import React from 'react'

import style from './App.module.scss'

const gameIsStarted = true

const App: React.FC = () => {
  return (
    <div className={style.appOverlay}>
      <MainImage imageURL={robotCity} />
      {gameIsStarted ? <Timer /> : null}
      <Footer />
    </div>
  )
}

export default App

import robotCity from '@assets/images/robot-city.jpg'
import Footer from '@components/footer'
import MainImage from '@components/mainImage'
import Timer from '@components/timer'
import React from 'react'

import style from './App.module.scss'

const gameIsStarted = true

const App: React.FC = () => {
  return (
    <div className={style.appOverlay}>
      {gameIsStarted ? <Timer /> : null}
      <MainImage imageURL={robotCity} />
      <Footer />
    </div>
  )
}

export default App

import robotCity from '@assets/images/robot-city.jpg'
import Footer from '@components/footer'
import MainImage from '@components/mainImage'
import React from 'react'

import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={style.appOverlay}>
      <MainImage imageURL={robotCity} />
      <Footer />
    </div>
  )
}

export default App

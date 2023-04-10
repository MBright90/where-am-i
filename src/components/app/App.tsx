import Footer from '@components/footer'
import MainImage from '@components/mainImage'
import React from 'react'

import robotCity from '../../assets/images/robot-city.jpg'
import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <p>I am working</p>
      <MainImage imageURL={robotCity} />
      <Footer />
    </div>
  )
}

export default App

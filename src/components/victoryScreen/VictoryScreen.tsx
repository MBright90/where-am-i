import { AppContext } from '@app/context/Context'
import React, { useContext } from 'react'

import style from './VictoryScreen.module.scss'

const VictoryScreen: React.FC = () => {
  const { resetGame } = useContext(AppContext)

  return (
    <div className={style.victoryScreen}>
      <div className={style.victoryContainer}>
        <h1 className={style.victoryHeader}>Congratulations!</h1>
        <p className={style.victoryPara}>You have found all the characters</p>
        <button className={style.resetGameButton} onClick={resetGame}>
          Select Image
        </button>
      </div>
    </div>
  )
}

export default VictoryScreen

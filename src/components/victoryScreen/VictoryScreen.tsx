import { AppContext } from '@app/context/Context'
import React, { useContext } from 'react'

import style from './VictoryScreen.module.scss'

const formatTimer = (timeCount: number) => {
  const minutes = Math.floor(timeCount / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
  const seconds = (timeCount % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })

  return `${minutes}:${seconds}`
}

const VictoryScreen: React.FC = () => {
  const { resetGame, timeCount } = useContext(AppContext)

  return (
    <div className={style.victoryScreen}>
      <div className={style.victoryContainer}>
        <h1 className={style.victoryHeader}>Congratulations!</h1>
        <p className={style.victoryPara}>You have found all the characters</p>
        <p className={style.victoryTime}>{formatTimer(timeCount)}</p>
        <button className={style.resetGameButton} onClick={resetGame}>
          Select Image
        </button>
      </div>
    </div>
  )
}

export default VictoryScreen

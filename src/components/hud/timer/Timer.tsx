import { AppContext } from '@app/context/Context'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'

import style from './Timer.module.scss'

const formatTimer = (timeCount: number) => {
  const minutes = Math.floor(timeCount / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
  const seconds = (timeCount % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })

  return `${minutes}:${seconds}`
}

const Timer: React.FC = () => {
  const { isVictorious, timeCount, handleSetTimeCount } = useContext(AppContext)

  useEffect(() => {
    if (isVictorious) return

    const timer = setInterval(() => {
      handleSetTimeCount()
    }, 1000)
    return () => clearInterval(timer)
  })

  return (
    <div className={style.timerContainer}>
      <FontAwesomeIcon icon={faClock} />
      <p>{formatTimer(timeCount)}</p>
    </div>
  )
}

export default Timer

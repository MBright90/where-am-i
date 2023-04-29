import { AppContext } from '@app/context/Context'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'

import style from './Timer.module.scss'

const formatTimer = (timeCount: number) => {
  const minutes = Math.floor(timeCount / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
  const seconds = (timeCount % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })

  return `${minutes}:${seconds}`
}

const Timer: React.FC = () => {
  const [timeCount, setTimeCount] = useState(0)
  const { isVictorious } = useContext(AppContext)

  useEffect(() => {
    if (isVictorious) return

    const timer = setInterval(() => {
      setTimeCount((count) => count + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [isVictorious])

  return (
    <div className={style.timerContainer}>
      <FontAwesomeIcon icon={faClock} />
      <p>{formatTimer(timeCount)}</p>
    </div>
  )
}

export default Timer

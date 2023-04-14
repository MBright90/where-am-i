import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

import style from './Timer.module.scss'

let formattedTime = '00:00'

const formatTimer = (timeCount: number) => {
  const minutes = Math.floor(timeCount / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
  const seconds = (timeCount % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })

  return `${minutes}:${seconds}`
}

const Timer: React.FC = () => {
  const [timeCount, setTimeCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeCount((count) => count + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    formattedTime = formatTimer(timeCount)
  }, [timeCount])

  return (
    <div className={style.timerContainer}>
      <FontAwesomeIcon icon={faClock} />
      <p>{formattedTime}</p>
    </div>
  )
}

export default Timer

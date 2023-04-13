import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

import style from './Timer.module.scss'

const Timer: React.FC = () => {
  const [timeCount, setTimeCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeCount((count) => count + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={style.timerContainer}>
      <FontAwesomeIcon icon={faClock} />
      <p>{timeCount}</p>
    </div>
  )
}

export default Timer

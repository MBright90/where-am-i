import React from 'react'

import style from './Timer.module.scss'

const Timer: React.FC = () => {
  const timerValue = 100
  return (
    <div className={style.timerContainer}>
      <p>{timerValue}</p>
    </div>
  )
}

export default Timer

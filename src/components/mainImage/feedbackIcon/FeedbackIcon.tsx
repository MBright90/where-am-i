import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import style from './FeedbackIcon.module.scss'

export interface FeedbackIconProps {
  outcome: boolean
  posX: number
  posY: number
}

const FeedbackIcon: React.FC<FeedbackIconProps> = ({ outcome, posX, posY }) => {
  const outcomeIcon = outcome ? (
    <FontAwesomeIcon className={`${style.correctIcon} ${style.faIcon}`} icon={faCheck} />
  ) : (
    <FontAwesomeIcon className={`${style.incorrectIcon} ${style.faIcon}`} icon={faXmark} />
  )

  return (
    <div className={style.feedbackIcon} style={{ top: `${posY}%`, left: `${posX}%` }}>
      {outcomeIcon}
    </div>
  )
}

export default FeedbackIcon

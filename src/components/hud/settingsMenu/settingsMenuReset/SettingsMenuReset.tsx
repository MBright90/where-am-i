/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { AppContext } from '@app/context/Context'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

import style from './SettingsMenuReset.module.scss'

const SettingsMenuReset: React.FC = () => {
  const { resetGame } = useContext(AppContext)
  return (
    <div
      className={style.settingsMenuReset}
      onClick={resetGame}
      onKeyDown={(e) => {
        if (e.code === 'enter') resetGame()
      }}
      tabIndex={0}
      role="button"
      aria-label="Reset game"
    >
      <FontAwesomeIcon className={style.faIcon} icon={faRotate} />
    </div>
  )
}

export default SettingsMenuReset

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import style from './SettingsMenu.module.scss'

const SettingsMenu: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)
  // Add context audio functionality here

  const handleToggleClick = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div
      className={style.settingsMenu}
      onClick={handleToggleClick}
      onKeyDown={(e) => {
        if (e.code === 'enter') handleToggleClick()
      }}
      tabIndex={0}
    >
      <FontAwesomeIcon className={style.faIcon} icon={faEllipsis} />
    </div>
  )
}

export default SettingsMenu

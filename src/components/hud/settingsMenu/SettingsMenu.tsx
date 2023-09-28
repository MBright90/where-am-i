/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import style from './SettingsMenu.module.scss'
import SettingsMenuAudio from './settingsMenuAudio/SettingsMenuAudio'
import SettingsMenuReset from './settingsMenuReset/SettingsMenuReset'

const SettingsMenu: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)

  const handleToggleClick = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div
      className={style.settingsMenuToggle}
      onClick={handleToggleClick}
      onKeyDown={(e) => {
        if (e.code === 'enter') handleToggleClick()
      }}
      role="button"
      aria-label="Settings toggle"
      tabIndex={0}
    >
      <FontAwesomeIcon
        className={`${style.faIcon} ${isShowing ? style.toggleActive : ''}`}
        icon={faEllipsis}
      />
      {isShowing ? (
        <div className={`${style.settingsMenu} ${style.settingsMenuActive}`}>
          <SettingsMenuAudio />
          <SettingsMenuReset />
        </div>
      ) : null}
    </div>
  )
}

export default SettingsMenu

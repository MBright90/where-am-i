/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { AppContext } from '@app/context/Context'
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

import style from './SettingsMenuAudio.module.scss'

const SettingsMenuAudio: React.FC = () => {
  const { audioIsActive, handleAudioChange } = useContext(AppContext)

  const toggleAudio = () => {
    handleAudioChange(!audioIsActive)
  }

  const handleToggleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    toggleAudio()
    e.stopPropagation()
  }

  return (
    <div
      className={style.settingsMenuAudio}
      onClick={handleToggleClick}
      onKeyDown={(e) => {
        if (e.code === 'enter') toggleAudio
      }}
      tabIndex={0}
    >
      <FontAwesomeIcon
        className={style.faIcon}
        icon={audioIsActive ? faVolumeHigh : faVolumeXmark}
      />
    </div>
  )
}

export default SettingsMenuAudio

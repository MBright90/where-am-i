/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { AppContext } from '@app/context/Context'
import React, { KeyboardEventHandler, MouseEventHandler, useContext } from 'react'

import style from './StartImageTile.module.scss'

const StartImageTile: React.FC<{ imageURL: string; imageId: string }> = ({ imageURL, imageId }) => {
  const { audioIsActive, handleStartGame, memoIntroAudio } = useContext(AppContext)

  const handleDivClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const id = e.currentTarget.dataset.imageId ?? ''
    handleStartGame(id)
  }

  const handleDivKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const id = e.currentTarget.dataset.imageId ?? ''
    handleStartGame(id)
  }

  return (
    <div
      className={style.imageTile}
      data-image-id={imageId}
      onClick={(e) => {
        handleDivClick(e)
        if (audioIsActive) memoIntroAudio.play()
      }}
      onKeyDown={handleDivKeyDown}
      tabIndex={0}
    >
      <img src={imageURL} alt={imageId} />
    </div>
  )
}

export default StartImageTile

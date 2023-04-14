/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler } from 'react'

import style from './MainImage.module.scss'

interface Props {
  imageURL?: string
}

const MainImage: React.FC<Props> = ({ imageURL }) => {
  // Currently logs current coords of click
  const logCoords: MouseEventHandler<HTMLImageElement> = (e) => {
    console.log(`e: ${e.clientX}, y: ${e.clientY}`)
  }

  return <img className={style.mainImage} src={imageURL} alt="mainImage" onClick={logCoords} />
}

export default MainImage

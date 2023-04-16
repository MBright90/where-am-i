/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler } from 'react'

import style from './MainImage.module.scss'

interface MainImageProps {
  imageURL?: string
}

const MainImage: React.FC<MainImageProps> = ({ imageURL }) => {
  const convertToPercentage = (position: number, totalLength: number) => {
    return (position / totalLength) * 100
  }

  // Currently logs current coords of click
  const retrieveCoordsPercentage: MouseEventHandler<HTMLImageElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const xPosPercent = convertToPercentage(e.clientX - rect.left, e.currentTarget.width)
    const yPosPercent = convertToPercentage(e.clientY - rect.top, e.currentTarget.height)
    return { X: xPosPercent, Y: yPosPercent }
  }

  return (
    <img
      className={style.mainImage}
      src={imageURL}
      alt="mainImage"
      onClick={retrieveCoordsPercentage}
    />
  )
}

export default MainImage

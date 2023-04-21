/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler, useState } from 'react'

import style from './MainImage.module.scss'
import SelectionMenu from './selectionMenu/SelectionMenu'

interface MainImageProps {
  imageURL?: string
}

const MainImage: React.FC<MainImageProps> = ({ imageURL }) => {
  const [menuShowing, setMenuShowing] = useState({ isShowing: false, posX: 0, posY: 0 })

  const convertToPercentage = (position: number, totalLength: number) => {
    return (position / totalLength) * 100
  }

  const retrieveCoordsPercentage: MouseEventHandler<HTMLImageElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const xPosPercent = convertToPercentage(e.clientX - rect.left, e.currentTarget.width)
    const yPosPercent = convertToPercentage(e.clientY - rect.top, e.currentTarget.height)

    setMenuShowing({
      isShowing: true,
      posX: xPosPercent,
      posY: yPosPercent
    })
  }

  const handleImageClick: MouseEventHandler<HTMLImageElement> = (e) => {
    if (menuShowing.isShowing)
      setMenuShowing({
        isShowing: false,
        posX: 0,
        posY: 0
      })
    else retrieveCoordsPercentage(e)
  }

  const handleMenuClick = () => {
    setMenuShowing({
      isShowing: false,
      posX: 0,
      posY: 0
    })
  }

  return (
    <React.Fragment>
      <img className={style.mainImage} src={imageURL} alt="mainImage" onClick={handleImageClick} />
      {menuShowing.isShowing ? (
        <SelectionMenu
          posX={menuShowing.posX}
          posY={menuShowing.posY}
          handleMenuClick={handleMenuClick}
        />
      ) : null}
    </React.Fragment>
  )
}

export default MainImage

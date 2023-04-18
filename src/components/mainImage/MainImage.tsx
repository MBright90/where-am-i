/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler, useState } from 'react'

import style from './MainImage.module.scss'
import SelectionMenu from './selectionMenu/SelectionMenu'

interface MainImageProps {
  imageURL?: string
}

const MainImage: React.FC<MainImageProps> = ({ imageURL }) => {
  const [menuShowing, setMenuShowing] = useState({ isShowing: false, menuX: 0, menuY: 0 })

  const convertToPercentage = (position: number, totalLength: number) => {
    return (position / totalLength) * 100
  }

  // Currently logs current coords of click
  const retrieveCoordsPercentage: MouseEventHandler<HTMLImageElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const xPosPercent = convertToPercentage(e.clientX - rect.left, e.currentTarget.width)
    const yPosPercent = convertToPercentage(e.clientY - rect.top, e.currentTarget.height)

    setMenuShowing({
      isShowing: true,
      menuX: xPosPercent,
      menuY: yPosPercent
    })
  }

  return (
    <React.Fragment>
      <img
        className={style.mainImage}
        src={imageURL}
        alt="mainImage"
        onClick={retrieveCoordsPercentage}
      />
      {menuShowing.isShowing ? (
        <SelectionMenu menuX={menuShowing.menuX} menuY={menuShowing.menuY} />
      ) : null}
    </React.Fragment>
  )
}

export default MainImage

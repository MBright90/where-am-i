import robotCity from '@assets/images/robot-city/robot-city.jpg'
import { ImageTile } from '@customTypes/types'
import React, { ReactNode } from 'react'

import style from './StartScreen.module.scss'
import StartImageTile from './startImageTile/StartImageTile'

const startImageArray: Array<ImageTile> = [{ imageURL: robotCity, imageId: 'robot-city' }]

const StartScreen: React.FC = () => {
  const imageTileArray: Array<ReactNode> = startImageArray.map((imageObject) => {
    return (
      <StartImageTile
        imageURL={imageObject.imageURL}
        imageId={imageObject.imageId}
        key={imageObject.imageId}
      />
    )
  })

  return <div className={style.startScreen}>{imageTileArray}</div>
}

export default StartScreen

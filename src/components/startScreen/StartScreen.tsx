import { locationImageDatabase } from '@assets/images'
import { ImageTile } from '@customTypes/types'
import React, { ReactNode } from 'react'

import style from './StartScreen.module.scss'
import StartImageTile from './startImageTile/StartImageTile'

interface StartScreenProps {
  locationImageIdArr: Array<string>
}

const StartScreen: React.FC<StartScreenProps> = ({ locationImageIdArr }) => {
  const startImageArray: Array<ImageTile> = locationImageIdArr.map((locationImageId: string) => {
    const imageURL = locationImageDatabase[locationImageId]
    if (!imageURL) throw new Error(`No image found for ID: ${locationImageId}`)
    return { imageURL, imageId: locationImageId }
  })

  const imageTileArray: Array<ReactNode> = startImageArray.map((imageObject) => {
    return (
      <StartImageTile
        imageURL={imageObject.imageURL}
        imageId={imageObject.imageId}
        key={imageObject.imageId}
      />
    )
  })

  return (
    <div className={style.startScreen}>
      <h1>Choose Your Image</h1>
      <div className={style.startScreenImages}>{imageTileArray}</div>
    </div>
  )
}

export default StartScreen

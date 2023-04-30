import { locationImageDatabase } from '@assets/images'
import logo from '@assets/images/logo.png'
import { ImageTile } from '@customTypes/types'
import React, { ReactNode, useMemo } from 'react'

import style from './StartScreen.module.scss'
import Carousel from './carousel/Carousel'
import HowToPlay from './howToPlay/HowToPlay'
import StartImageTile from './startImageTile/StartImageTile'

interface StartScreenProps {
  locationImageIdArr: Array<string>
}

const StartScreen: React.FC<StartScreenProps> = ({ locationImageIdArr }) => {
  const memoLogo = useMemo(() => {
    const image = new Image()
    image.src = logo
    return image
  }, [])

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
      <img className={style.logoImage} src={memoLogo.src} alt="logo"></img>
      <Carousel>{imageTileArray}</Carousel>
      <HowToPlay />
    </div>
  )
}

export default StartScreen

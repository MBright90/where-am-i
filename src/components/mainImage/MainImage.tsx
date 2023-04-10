import React from 'react'

import style from './MainImage.module.scss'

interface Props {
  imageURL?: string
}

const MainImage: React.FC<Props> = ({ imageURL }) => {
  return <img className={style.mainImage} src={imageURL} alt="mainImage" />
}

export default MainImage

import React from 'react'

import style from './CheckItem.module.scss'

interface character {
  name: string
  id: string
  image: string
  hasFound: boolean
}

interface props {
  character: character
}

const CheckItem: React.FC<props> = ({ character }) => {
  return (
    <div className={style.checkItem}>
      <img src={`url("${character.image}")`} alt={character.id} />
    </div>
  )
}

export default CheckItem

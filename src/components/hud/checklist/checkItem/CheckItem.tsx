import { Character } from '@customTypes/types'
import React from 'react'

import style from './CheckItem.module.scss'

interface CheckItemProps {
  character: Character
}

const CheckItem: React.FC<CheckItemProps> = ({ character }) => {
  const imageURL = `./assets/${character.image}/${character.characterId}.png`

  return (
    <div className={style.checkItem}>
      <img src={`url("${imageURL}")`} alt={character.characterId} />
    </div>
  )
}

export default CheckItem

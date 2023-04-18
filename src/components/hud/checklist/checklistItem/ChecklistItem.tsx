import { Character } from '@customTypes/types'
import React from 'react'

import style from './CheckItem.module.scss'

interface ChecklistItemProps {
  character: Character
  image: string
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ character, image }) => {
  return (
    <div className={style.checklistItem}>
      <img src={image} alt={character.characterId} />
      <p>{character.name}</p>
    </div>
  )
}

export default ChecklistItem

import { utilityImageDatabase } from '@assets/images'
import { Character } from '@customTypes/types'
import React from 'react'

import style from './ChecklistItem.module.scss'

interface ChecklistItemProps {
  character: Character
  image: string
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ character, image }) => {
  return (
    <div className={style.checklistItem}>
      <img src={image} alt={`${character.name} example`} role="presentation" />
      <p>{character.name}</p>
      {character.hasFound ? (
        <img src={utilityImageDatabase.tick} alt="tick" className={style.found} />
      ) : null}
    </div>
  )
}

export default ChecklistItem

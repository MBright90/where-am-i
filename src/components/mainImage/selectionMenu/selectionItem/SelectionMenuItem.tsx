import { Character } from '@customTypes/types'
import React from 'react'

import style from './SelectionMenuItem.module.scss'

interface SelectionMenuItemProps {
  character: Character
  onSelectionClick: (characterId: string) => void
}

const SelectionMenuItem: React.FC<SelectionMenuItemProps> = ({ character, onSelectionClick }) => {
  const handleOnSelectionClick = () => {
    onSelectionClick(character.characterId)
  }

  return (
    <button
      className={style.selectionMenuItem}
      onClick={handleOnSelectionClick}
      disabled={character.hasFound ? true : false}
    >
      {character.name}
    </button>
  )
}

export default SelectionMenuItem

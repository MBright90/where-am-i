import { Character } from '@customTypes/types'
import React from 'react'

import style from './SelectionMenuItem.module.scss'

interface SelectionMenuItemProps {
  character: Character
}

const SelectionMenuItem: React.FC<SelectionMenuItemProps> = ({ character }) => {
  console.log(character)

  return <button className={style.selectionMenuItem}>{character.name}</button>
}

export default SelectionMenuItem

import { AppContext } from '@app/context/Context'
import React, { useContext } from 'react'

import style from './SelectionMenu.module.scss'
import SelectionMenuItem from './selectionItem/SelectionMenuItem'

interface SelectionMenuProps {
  posX: number
  posY: number
}

const SelectionMenu: React.FC<SelectionMenuProps> = ({ posX, posY }) => {
  const { currentCharacters, checkSelectionOutcome } = useContext(AppContext)

  const onSelectionClick = (characterId: string) => {
    checkSelectionOutcome(characterId, { posX, posY })
  }

  const characterChoiceArr = currentCharacters.map((character) => {
    return (
      <SelectionMenuItem
        character={character}
        key={character.characterId}
        onSelectionClick={onSelectionClick}
      />
    )
  })

  return <div className={style.selectionMenu}>{characterChoiceArr}</div>
}

export default SelectionMenu

import { AppContext } from '@app/context/Context'
import React, { useContext } from 'react'

import style from './SelectionMenu.module.scss'
import SelectionMenuItem from './selectionItem/SelectionMenuItem'

interface SelectionMenuProps {
  posX: number
  posY: number
  handleMenuClick: () => void
}

const SelectionMenu: React.FC<SelectionMenuProps> = ({ handleMenuClick, posX, posY }) => {
  const { currentCharacters, checkSelectionOutcome } = useContext(AppContext)

  // Check the side of the image click was on, and adjust menu position to ensure
  // visibility at all times
  const calcPosX: string = posX > 50 ? `calc(${posX}% - 120px)` : `calc(${posX}% + 20px)`

  const onSelectionClick = (characterId: string) => {
    checkSelectionOutcome(characterId, { posX, posY })
    handleMenuClick()
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

  return (
    <div className={style.selectionMenu} style={{ top: `${posY}%`, left: calcPosX }}>
      {characterChoiceArr}
    </div>
  )
}

export default SelectionMenu

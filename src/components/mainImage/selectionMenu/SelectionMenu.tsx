import { AppContext } from '@app/context/Context'
import React, { useContext } from 'react'

import style from './SelectionMenu.module.scss'
import SelectionMenuItem from './selectionItem/SelectionMenuItem'

interface SelectionMenuProps {
  menuY: number
  menuX: number
}

const SelectionMenu: React.FC<SelectionMenuProps> = () => {
  const { currentCharacters } = useContext(AppContext)

  const characterChoiceArr = currentCharacters.map((character) => {
    return <SelectionMenuItem character={character} key={character.characterId} />
  })

  return <div className={style.selectionMenu}>{characterChoiceArr}</div>
}

export default SelectionMenu

import { AppContext } from '@app/context/Context'
import React, { useContext } from 'react'

import style from './SelectionMenu.module.scss'

interface SelectionMenuProps {
  menuY: number
  menuX: number
}

const SelectionMenu: React.FC<SelectionMenuProps> = () => {
  const { currentCharacters } = useContext(AppContext)

  const checkMenuPosition = () => {

  }

  const characterChoiceArr = currentCharacters.map((character) => {
    character
  })
  console.log(characterChoiceArr)

  return <div className={style.selectionMenu}></div>
}

export default SelectionMenu

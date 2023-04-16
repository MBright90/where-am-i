import { AppContext } from '@app/context/Context'
import { Character } from '@customTypes/types'
import React, { ReactNode, useContext, useState } from 'react'

import style from './Checklist.module.scss'
import CheckItem from './checkItem/CheckItem'

interface ChecklistProps {
  imageId: string
}

const Checklist: React.FC<ChecklistProps> = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)
  const { currentCharacters } = useContext(AppContext)

  const handleToggleClick = () => {
    setIsShowing(!isShowing)
  }

  const checkItemArr: Array<ReactNode> = currentCharacters.map((character: Character) => (
    <CheckItem character={character} key={character.characterId} />
  ))

  return (
    <div
      className={style.checklistToggle}
      onClick={handleToggleClick}
      onKeyDown={(e) => {
        if (e.key === 'enter') handleToggleClick()
      }}
    >
      {isShowing ? <div className={style.checklist}>{checkItemArr}</div> : null}
    </div>
  )
}

export default Checklist

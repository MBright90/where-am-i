import { AppContext } from '@app/context/Context'
import { Character } from '@customTypes/types'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode, useContext, useState } from 'react'

import style from './Checklist.module.scss'
import CheckItem from './checkItem/CheckItem'

const Checklist: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)
  const { currentCharacters } = useContext(AppContext)

  const handleToggleClick = () => {
    setIsShowing(!isShowing)
  }

  const createChecklistArr = () => {
    const checkItemArr: Array<ReactNode> = currentCharacters.map((character: Character) => (
      <CheckItem character={character} key={character.characterId} />
    ))
    return checkItemArr
  }

  return (
    <div
      className={style.checklistToggle}
      onClick={handleToggleClick}
      onKeyDown={(e) => {
        if (e.key === 'enter') handleToggleClick()
      }}
    >
      <FontAwesomeIcon
        icon={faCaretDown}
        className={`${style.faIcon} ${isShowing ? style.toggleActive : ''}`}
      />
      {isShowing ? (
        <div className={`${style.checklist} ${isShowing ? style.checklistActive : ''}`}>
          {createChecklistArr()}
        </div>
      ) : null}
    </div>
  )
}

export default Checklist

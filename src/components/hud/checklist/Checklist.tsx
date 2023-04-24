/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { AppContext } from '@app/context/Context'
import { characterImageDatabase } from '@assets/images'
import { Character } from '@customTypes/types'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode, useContext, useState } from 'react'

import style from './Checklist.module.scss'
import CheckItem from './checklistItem/ChecklistItem'

const Checklist: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false)
  const { currentCharacters } = useContext(AppContext)

  const handleToggleClick = () => {
    setIsShowing(!isShowing)
  }

  const createChecklistArr = () => {
    const checkItemArr: Array<ReactNode> = currentCharacters.map((character: Character) => {
      const image: string = characterImageDatabase[character.characterId]
      return <CheckItem character={character} image={image} key={character.characterId} />
    })
    return checkItemArr
  }

  return (
    <div
      className={style.checklistToggle}
      onClick={handleToggleClick}
      onKeyDown={(e) => {
        if (e.code === 'enter') handleToggleClick()
      }}
      tabIndex={0}
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

import { AppContext } from '@app/context/Context'
import { Character } from '@customTypes/types'
import React, { useContext } from 'react'

import style from './SelectionMenuItem.module.scss'

interface SelectionMenuItemProps {
  character: Character
  onSelectionClick: (characterId: string) => Promise<boolean>
}

const SelectionMenuItem: React.FC<SelectionMenuItemProps> = ({ character, onSelectionClick }) => {
  const { audioIsActive, isVictorious, memoCorrectAudio, memoIncorrectAudio, memoVictoryAudio } =
    useContext(AppContext)

  const handleOnSelectionClick = () => {
    return onSelectionClick(character.characterId)
  }

  return (
    <button
      className={style.selectionMenuItem}
      onClick={async () => {
        const result = await handleOnSelectionClick()
        if (audioIsActive && result && isVictorious) memoVictoryAudio.play()
        else if (audioIsActive && result) memoCorrectAudio.play()
        else if (audioIsActive) memoIncorrectAudio.play()
      }}
      disabled={character.hasFound ? true : false}
    >
      {character.name}
    </button>
  )
}

export default SelectionMenuItem

import { getCharactersPosition, retrieveCharacters } from '@app/firebase/firebaseFuncs'
import { correctAudio, incorrectAudio, victoryAudio } from '@assets/audio'
import { locationImageDatabase } from '@assets/images'
import { AppContextData, Character } from '@customTypes/types'
import React, { ReactNode, createContext, useMemo, useState } from 'react'

export const AppContext = createContext<AppContextData>({
  audioIsActive: true,
  currentCharacters: [],
  currentImage: '',
  currentImageId: '',
  gameIsStarted: false,
  isVictorious: false,

  checkSelectionOutcome: () => Promise.resolve(false),
  memoGetCharactersPosition: () => Promise.resolve({}),
  handleAudioChange: () => Promise.resolve(),
  handleStartGame: () => Promise.resolve(),
  resetGame: () => Promise.resolve(false)
})

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCharacters, setCurrentCharacters] = useState<Character[]>([])
  const [currentImage, setCurrentImage] = useState<string>('')
  const [currentImageId, setCurrentImageId] = useState<string>('')
  const [gameIsStarted, setGameIsStarted] = useState<boolean>(false)
  const [audioIsActive, setAudioIsActive] = useState<boolean>(true)
  const [isVictorious, setIsVictorious] = useState<boolean>(false)

  const memoGetCharactersPosition = useMemo(() => getCharactersPosition, [])

  const memoCorrectAudio = useMemo(() => new Audio(correctAudio), [])
  const memoIncorrectAudio = useMemo(() => new Audio(incorrectAudio), [])
  const memoVictoryAudio = useMemo(() => new Audio(victoryAudio), [])

  function playSound(type: string) {
    if (audioIsActive) {
      if (type === 'incorrect') memoIncorrectAudio.play()
      else if (type === 'correct') memoCorrectAudio.play()
      else if (type === 'victory') memoVictoryAudio.play()
    }
  }

  async function handleSetCurrentCharacters(imageId: string): Promise<void> {
    const characters: Character[] = await retrieveCharacters(imageId)
    setCurrentCharacters([...characters])
  }

  async function handleStartGame(imageId: string): Promise<void> {
    setCurrentImage(locationImageDatabase[imageId])
    await handleSetCurrentCharacters(imageId)
    setCurrentImageId(imageId)
    setGameIsStarted(true)
  }

  function checkGameOutcome() {
    let gameEnded = true
    currentCharacters.forEach((character) => {
      if (!character.hasFound) gameEnded = false
    })
    return gameEnded
  }

  async function checkSelectionOutcome(
    characterId: string,
    selectionPosition: { posX: number; posY: number }
  ): Promise<boolean> {
    const positionRanges = await memoGetCharactersPosition(characterId, currentImageId)
    const selectedX: number = selectionPosition.posX
    const selectedY: number = selectionPosition.posY
    if (
      positionRanges.lowX < selectedX &&
      positionRanges.highX > selectedX &&
      positionRanges.lowY < selectedY &&
      positionRanges.highY > selectedY
    ) {
      setCharacterAsFound(characterId)
      if (checkGameOutcome()) {
        setIsVictorious(true)
        playSound('victory')
      } else {
        playSound('correct')
      }
      return true
    } else {
      playSound('incorrect')
      return false
    }
  }

  function setCharacterAsFound(characterId: string) {
    const prevCurrentCharacters: Array<Character> = [...currentCharacters]
    const indexOfCharacter: number = prevCurrentCharacters.findIndex(
      (character) => character.characterId === characterId
    )
    prevCurrentCharacters[indexOfCharacter].hasFound = true
    setCurrentCharacters([...prevCurrentCharacters])
  }

  function resetGame() {
    setGameIsStarted(false)
    setIsVictorious(false)
  }

  function handleAudioChange(newState: boolean) {
    setAudioIsActive(newState)
  }

  const contextValue = {
    currentCharacters,
    currentImage,
    currentImageId,
    gameIsStarted,
    isVictorious,

    setCharacterAsFound,
    handleSetCurrentCharacters,
    handleStartGame,

    memoGetCharactersPosition,
    checkSelectionOutcome,

    audioIsActive,
    handleAudioChange,
    resetGame
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider

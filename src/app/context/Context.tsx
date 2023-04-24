import { getCharactersPosition, retrieveCharacters } from '@app/firebase/firebaseFuncs'
import { correctAudio, incorrectAudio, victoryAudio } from '@assets/audio'
import { locationImageDatabase } from '@assets/images'
import { Character } from '@customTypes/types'
import React, { ReactNode, createContext, useMemo, useState } from 'react'

interface AppContextData {
  audioIsActive: boolean
  currentCharacters: Character[]
  currentImage: string
  currentImageId: string
  gameIsStarted: boolean
  getCharactersPosition: typeof getCharactersPosition
  handleAudioChange: (newState: boolean) => void
  handleStartGame: (imageId: string) => Promise<void>
  checkSelectionOutcome: (
    characterID: string,
    selectionPosition: { posX: number; posY: number }
  ) => Promise<void>
}

export const AppContext = createContext<AppContextData>({
  audioIsActive: true,
  currentCharacters: [],
  currentImage: '',
  currentImageId: '',
  gameIsStarted: false,
  getCharactersPosition,
  handleAudioChange: () => Promise.resolve(),
  handleStartGame: () => Promise.resolve(),
  checkSelectionOutcome: () => Promise.resolve()
})

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCharacters, setCurrentCharacters] = useState<Character[]>([])
  const [currentImage, setCurrentImage] = useState<string>('')
  const [currentImageId, setCurrentImageId] = useState<string>('')
  const [gameIsStarted, setGameIsStarted] = useState<boolean>(false)
  const [audioIsActive, setAudioIsActive] = useState<boolean>(true)

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
      if (character.hasFound) gameEnded = false
    })
    return gameEnded
  }

  async function checkSelectionOutcome(
    characterId: string,
    selectionPosition: { posX: number; posY: number }
  ): Promise<void> {
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
        playSound('victory')
        setGameIsStarted(false)
      } else {
        playSound('correct')
      }
    } else {
      playSound('incorrect')
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

  function handleAudioChange(newState: boolean) {
    setAudioIsActive(newState)
  }

  const contextValue = {
    currentCharacters,
    currentImage,
    currentImageId,

    setCharacterAsFound,
    handleSetCurrentCharacters,
    handleStartGame,

    gameIsStarted,
    getCharactersPosition,
    checkSelectionOutcome,

    audioIsActive,
    handleAudioChange
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider

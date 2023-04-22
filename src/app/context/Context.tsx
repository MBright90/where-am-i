import { getCharactersPosition, retrieveCharacters } from '@app/firebase/firebaseFuncs'
import { locationImageDatabase } from '@assets/images'
import { Character } from '@customTypes/types'
import React, { ReactNode, createContext, useState } from 'react'

interface AppContextData {
  currentCharacters: Character[]
  currentImage: string
  currentImageId: string
  gameIsStarted: boolean
  getCharactersPosition: typeof getCharactersPosition
  handleStartGame: (imageId: string) => Promise<void>
  checkSelectionOutcome: (
    characterID: string,
    selectionPosition: { posX: number; posY: number }
  ) => Promise<void>
}

export const AppContext = createContext<AppContextData>({
  currentCharacters: [],
  currentImage: '',
  currentImageId: '',
  gameIsStarted: false,
  getCharactersPosition,
  handleStartGame: () => Promise.resolve(),
  checkSelectionOutcome: () => Promise.resolve()
})

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCharacters, setCurrentCharacters] = useState<Character[]>([])
  const [currentImage, setCurrentImage] = useState<string>('')
  const [currentImageId, setCurrentImageId] = useState<string>('')
  const [gameIsStarted, setGameIsStarted] = useState<boolean>(false)

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

  async function checkSelectionOutcome(
    characterId: string,
    selectionPosition: { posX: number; posY: number }
  ): Promise<void> {
    const positionRanges = await getCharactersPosition(characterId, currentImageId)
    const selectedX: number = selectionPosition.posX
    const selectedY: number = selectionPosition.posY
    if (
      positionRanges.lowX < selectedX &&
      positionRanges.highX > selectedX &&
      positionRanges.lowY < selectedY &&
      positionRanges.highY > selectedY
    )
      setCharacterAsFound(characterId)
  }

  function setCharacterAsFound(characterId: string) {
    const prevCurrentCharacters: Array<Character> = [...currentCharacters]
    const indexOfCharacter: number = prevCurrentCharacters.findIndex(
      (character) => character.characterId === characterId
    )
    prevCurrentCharacters[indexOfCharacter].hasFound = true
    setCurrentCharacters([...prevCurrentCharacters])
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
    checkSelectionOutcome
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider

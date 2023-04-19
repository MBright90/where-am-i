import { getCharactersPosition, retrieveCharacters } from '@app/firebase/firebaseFuncs'
import { locationImageDatabase } from '@assets/images'
import { Character } from '@customTypes/types'
import React, { ReactNode, createContext, useState } from 'react'

interface AppContextData {
  currentCharacters: Character[]
  currentImage: string
  gameIsStarted: boolean
  getCharactersPosition: typeof getCharactersPosition
  handleStartGame: (imageId: string) => Promise<void>
  checkSelectionOutcome: (
    characterID: string,
    selectionPosition: { X: number; Y: number }
  ) => Promise<boolean>
}

export const AppContext = createContext<AppContextData>({
  currentCharacters: [],
  currentImage: '',
  gameIsStarted: false,
  getCharactersPosition,
  handleStartGame: () => Promise.resolve(),
  checkSelectionOutcome: () => Promise.resolve(false)
})

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCharacters, setCurrentCharacters] = useState<Character[]>([])
  const [currentImage, setCurrentImage] = useState<string>('')
  const [gameIsStarted, setGameIsStarted] = useState<boolean>(false)

  async function handleSetCurrentCharacters(imageId: string): Promise<void> {
    const characters: Character[] = await retrieveCharacters(imageId)
    setCurrentCharacters([...characters])
  }

  async function handleStartGame(imageId: string): Promise<void> {
    setCurrentImage(locationImageDatabase[imageId])
    await handleSetCurrentCharacters(imageId)
    setGameIsStarted(true)
  }

  async function checkSelectionOutcome(
    characterId: string,
    selectionPosition: { X: number; Y: number }
  ): Promise<boolean> {
    const positionRanges = await getCharactersPosition(characterId, currentImage)
    const selectedX: number = selectionPosition.X
    const selectedY: number = selectionPosition.Y
    if (
      positionRanges.lowX < selectedX &&
      positionRanges.highX > selectedX &&
      positionRanges.lowY < selectedY &&
      positionRanges.highY > selectedY
    )
      return true
    return false
  }

  function handleCharacterSelection() {
    console.log('ham please')
  }

  const contextValue = {
    currentCharacters,
    currentImage,

    handleCharacterSelection,
    handleSetCurrentCharacters,
    handleStartGame,

    gameIsStarted,
    getCharactersPosition,
    checkSelectionOutcome
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider

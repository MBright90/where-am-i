import { getCharactersPosition, retrieveCharacters } from '@app/firebase/firebaseFuncs'
import { Character } from '@customTypes/types'
import React, { ReactNode, createContext, useState } from 'react'

interface AppContextData {
  currentCharacters: Character[]
  gameIsStarted: boolean
  getCharactersPosition: typeof getCharactersPosition
  handleSetCurrentImage: (imageId: string) => Promise<void>
  handleSetIsGameStarted: (gameStartState: boolean) => void
}

export const AppContext = createContext<AppContextData>({
  currentCharacters: [],
  gameIsStarted: false,
  getCharactersPosition,
  handleSetCurrentImage: () => Promise.resolve(),
  handleSetIsGameStarted: () => Boolean
})

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCharacters, setCurrentCharacters] = useState<Character[]>([])
  const [currentImage, setCurrentImage] = useState<string>('')
  const [gameIsStarted, setGameIsStarted] = useState<boolean>(false)

  async function handleSetCurrentCharacters(imageId: string): Promise<void> {
    const characters: Character[] = await retrieveCharacters(imageId)
    setCurrentCharacters([...characters])
  }

  async function handleSetCurrentImage(imageId: string): Promise<void> {
    setCurrentImage(imageId)
    await handleSetCurrentCharacters(imageId)
  }

  function handleSetIsGameStarted(gameStartState: boolean) {
    setGameIsStarted(gameStartState)
  }

  const contextValue = {
    currentCharacters,
    currentImage,
    handleSetCurrentCharacters,
    handleSetCurrentImage,
    handleSetIsGameStarted,
    gameIsStarted,
    getCharactersPosition
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider

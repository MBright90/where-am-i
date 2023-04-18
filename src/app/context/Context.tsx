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
}

export const AppContext = createContext<AppContextData>({
  currentCharacters: [],
  currentImage: '',
  gameIsStarted: false,
  getCharactersPosition,
  handleStartGame: () => Promise.resolve()
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

  const contextValue = {
    currentCharacters,
    currentImage,
    handleSetCurrentCharacters,
    handleStartGame,
    gameIsStarted,
    getCharactersPosition
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider

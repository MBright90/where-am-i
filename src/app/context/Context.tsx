import { getCharactersPosition, retrieveCharacters } from '@app/firebase/firebaseFuncs'
import { Character } from '@customTypes/types'
import React, { ReactNode, createContext, useState } from 'react'

interface AppContextData {
  currentCharacters: Character[]
  getCharactersPosition: typeof getCharactersPosition
}

export const AppContext = createContext<AppContextData>({
  currentCharacters: [],
  getCharactersPosition
})

interface Props {
  children: ReactNode
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [currentCharacters, setCurrentCharacters] = useState<Character[]>([])

  async function handleSetCurrentCharacters(imageId: string): Promise<void> {
    const characters: Array<Character> = await retrieveCharacters(imageId)
    setCurrentCharacters([...characters])
  }

  const contextValue = {
    currentCharacters,
    handleSetCurrentCharacters,
    getCharactersPosition
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export default AppProvider

import { getCharactersPosition, retrieveCharacters } from '@app/firebase/firebaseFuncs'
import React, { ReactNode, createContext, useState } from 'react'

interface AppContextData {
  getCharactersPosition: typeof getCharactersPosition
  retrieveCharacters: typeof retrieveCharacters
}

export const AppContext = createContext<AppContextData>({
  retrieveCharacters,
  getCharactersPosition
})

interface props {
  children: ReactNode
}

const AppProvider: React.FC<props> = ({ children }) => {
  const [currentCharacters, setCurrentCharacters] = useState([])

  async function handleSetCurrentCharacters(imageId: string): Promise<void> {
    const characters = await retrieveCharacters(imageId)
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

export interface AppContextData {
  audioIsActive: boolean
  currentCharacters: Character[]
  currentImage: string
  currentImageId: string

  timeCount: number
  handleSetTimeCount: () => void
  gameIsStarted: boolean
  isVictorious: boolean

  memoIntroAudio: HTMLAudioElement
  memoCorrectAudio: HTMLAudioElement
  memoIncorrectAudio: HTMLAudioElement
  memoVictoryAudio: HTMLAudioElement

  checkSelectionOutcome: (
    characterID: string,
    selectionPosition: { posX: number; posY: number }
  ) => Promise<boolean>
  memoGetCharactersPosition: (character: string, imageId: string) => Promise<object>
  handleAudioChange: (newState: boolean) => void
  handleStartGame: (imageId: string) => Promise<void>
  resetGame: () => void
}

export interface Character {
  name: string
  characterId: string
  storeId?: string
  hasFound?: boolean
  highX?: number
  highY?: number
  lowX?: number
  lowY?: number
}

export interface ImageTile {
  imageURL: string
  imageId: string
}

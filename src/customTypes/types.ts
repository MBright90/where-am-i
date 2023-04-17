export interface Character {
  name: string
  characterId: string
  storeId?: string
  image?: string
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

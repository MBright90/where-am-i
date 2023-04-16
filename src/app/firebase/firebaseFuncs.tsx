import { addDoc, collection, doc, getDocs, getFirestore, query, where } from 'firebase/firestore'

interface character {
  image: string
  name: string
  lowX: number
  lowY: number
  highX: number
  highY: number
}

async function retrieveCharacters(imageId: string) {
  try {
    const imageRef = doc(getFirestore(), 'images', imageId)
    const imageCharacters = collection(imageRef, 'characters')

    const querySnapshot = await getDocs(query(imageCharacters))
    const characters = querySnapshot.docs.map((character) => {
      const characterData = character.data()
      return {
        name: characterData.name,
        characterId: characterData.characterId,
        storeId: character.id
      }
    })
    return characters
  } catch (error) {
    console.log('Could not retrieve characters: ', error)
    return []
  }
}

async function getCharactersPosition(characterId: string, imageId: string) {
  try {
    const imageRef = doc(getFirestore(), 'images', imageId)
    const imageCharacters = collection(imageRef, 'characters')

    const querySnapshot = await getDocs(
      query(imageCharacters, where('characterId', '==', characterId))
    )
    const characterDoc = querySnapshot.docs[0].data()
    return {
      lowX: characterDoc.lowX,
      lowY: characterDoc.lowY,
      highX: characterDoc.highX,
      highY: characterDoc.highY
    }
  } catch (error) {
    console.log('Could not retrieve character ranges: ', error)
    return {}
  }
}

async function writeNewCharacter(character: character) {
  try {
    const imageSet = collection(doc(getFirestore(), 'images', character.image), 'characters')
    await addDoc(imageSet, {
      name: character.name,
      lowX: character.lowX,
      lowY: character.lowY,
      highX: character.highX,
      highY: character.highY
    })
  } catch (error) {
    console.log('Could not add character: ', error)
  }
}

export { getCharactersPosition, retrieveCharacters, writeNewCharacter }

/* eslint-disable prettier/prettier */
import claptrap from './claptrap.png'
import generalGrievous from './general-grievous.png'
import kangJohnson from './kang-johnson.png'
import megGriffin from './meg-griffin.png'
import mikeWazowski from './mike-wazowski.png'
import robotCity from './robot-city.jpg'

interface ImageDatabase {
  [key: string]: string
}

const characterImageDatabase: ImageDatabase = {
  'claptrap': claptrap,
  'general-grievous': generalGrievous,
  'kang-johnson': kangJohnson,
  'meg-griffin': megGriffin,
  'mike-wazowski': mikeWazowski
}

const locationImageDatabase: ImageDatabase = {
  'robot-city': robotCity
}

export { characterImageDatabase, locationImageDatabase }
export default robotCity

/* eslint-disable prettier/prettier */
import claptrap from './claptrap.png'
import generalGrievous from './general-grievous.png'
import kangJohnson from './kang-johnson.png'
import megGriffin from './meg-griffin.png'
import mikeWazowski from './mike-wazowski.png'
import robotCity from './robot-city.jpg'
import tick from './tick.png'
import universeImg from './universe-113.jpg'
import bobMinion from './bob-minion.png'
import gandalf from './gandalf.png'
import geraltOfRivia from './geralt-of-rivia.png'
import predator from './the-predator.png'
import KeanuReeves from './keanu-reeves.png'
import cyberpunkCity from './cyberpunk-city.jpg'
import tom from './tom.png'
import patrickStar from './patrick-star.png'
import ashKetchum from './ash-ketchum.png'
import brianGriffin from './brian-griffin.png'
import neo from './neo.png'


interface ImageDatabase {
  [key: string]: string
}

const characterImageDatabase: ImageDatabase = {
  'claptrap': claptrap,
  'general-grievous': generalGrievous,
  'kang-johnson': kangJohnson,
  'meg-griffin': megGriffin,
  'mike-wazowski': mikeWazowski,
  'bob-minion': bobMinion,
  'gandalf': gandalf,
  'geralt-of-rivia': geraltOfRivia,
  'the-predator': predator,
  'keanu-reeves': KeanuReeves,
  'tom': tom,
  'patrick-star': patrickStar,
  'ash-ketchum': ashKetchum,
  'brian-griffin': brianGriffin,
  'neo': neo
}

const locationImageDatabase: ImageDatabase = {
  'robot-city': robotCity,
  'universe-113': universeImg,
  'cyberpunk-city': cyberpunkCity
}

const utilityImageDatabase: ImageDatabase = {
  'tick': tick
}

export { characterImageDatabase, locationImageDatabase, utilityImageDatabase }
export default robotCity

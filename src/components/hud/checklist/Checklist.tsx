import React from 'react'

import style from './Checklist.module.scss'

interface props {
  imageId: string
}

const Checklist: React.FC<props> = ({ imageId }) => {
  console.log(imageId)
  return <div className={style.checklist}></div>
}

export default Checklist

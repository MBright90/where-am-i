import React from 'react'

import style from './HowToPlay.module.scss'

const HowToPlay: React.FC = () => {
  return (
    <div className={style.howToPlay}>
      <h1 className={style.howToPlayHeader}>How To Play</h1>
      <p className={style.howToPlayPara}>
        Select your image. You will see <span>five</span> characters to find. Click or tap on the
        picture where you think those characters are and select the character from the pop-up menu.
        If your selection is correct, you will hear a ding and that character will be checked off
        the list.
      </p>
      <p className={style.howToPlayPara}>
        Good luck finding <span>all</span> five characters.
      </p>
    </div>
  )
}

export default HowToPlay

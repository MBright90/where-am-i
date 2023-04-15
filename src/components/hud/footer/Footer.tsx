import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import style from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <a className={style.createdBy} href="https://github.com/MBright90/where-am-i">
        <FontAwesomeIcon icon={faGithub} /> <p>MBright90</p>
      </a>

      <a className={style.credits} href="https://www.instagram.com/ad.2.222/">
        <FontAwesomeIcon icon={faInstagram} /> <p>Egor Klyuchnyk</p>
      </a>
    </React.Fragment>
  )
}

export default Footer

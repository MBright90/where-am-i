import React from 'react'

import Checklist from './checklist/Checklist'
import Footer from './footer/Footer'
import Timer from './timer/Timer'

const HUD: React.FC = () => {
  return (
    <div className="hud">
      <Timer />
      <Checklist />
      <Footer />
    </div>
  )
}

export default HUD

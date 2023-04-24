import React from 'react'

import Checklist from './checklist/Checklist'
import Footer from './footer/Footer'
import SettingsMenu from './settingsMenu/SettingsMenu'
import Timer from './timer/Timer'

const HUD: React.FC = () => {
  return (
    <div className="hud">
      <Timer />
      <SettingsMenu />
      <Checklist />
      <Footer />
    </div>
  )
}

export default HUD

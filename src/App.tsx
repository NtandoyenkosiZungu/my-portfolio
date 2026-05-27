import SideBar from './components/layout/SideBar'
import type { Section } from './data/types'

import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about')

  return (
    <>
      <SideBar active={activeSection} onNavigate={setActiveSection}/>
    </>
  )
}

export default App

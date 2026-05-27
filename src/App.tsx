import SideBar from './components/layout/SideBar'
import ContentPanel from './components/layout/ContentPanel'
import type { Section } from './data/types'

import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about')

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white text-black">
        <SideBar active={activeSection} onNavigate={setActiveSection}/>
        <ContentPanel active={activeSection}/>
      </div>
    </>
  )
}

export default App

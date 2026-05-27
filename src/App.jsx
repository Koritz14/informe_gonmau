import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { DocumentViewer } from './components/DocumentViewer'
import { Footer } from './components/Footer'
import { DOCS_CONFIG } from './config/docs'
import './App.css'

function App() {
  const [activeDocId, setActiveDocId] = useState('resumen')
  const [activeFileName, setActiveFileName] = useState('01_resumen_gonmau.md')
  const [activeTitle, setActiveTitle] = useState('Resumen del Caso')

  const handleDocSelect = (docId, fileName) => {
    setActiveDocId(docId)
    setActiveFileName(fileName)
    
    // Find the title from config
    const doc = DOCS_CONFIG.find(d => d.id === docId)
    if (doc) {
      setActiveTitle(doc.title)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="app-layout flex-1">
        <Sidebar activeDocId={activeDocId} onDocSelect={handleDocSelect} />
        <DocumentViewer fileName={activeFileName} title={activeTitle} />
      </div>
      <Footer />
    </div>
  )
}

export default App

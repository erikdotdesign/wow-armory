import React, { useEffect } from 'react'
import './App.scss'

function App() {
  useEffect(() => {
    if (typeof parent !== undefined) {
      parent?.postMessage?.({ pluginMessage: 'hello' }, '*')
    }
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <button
        onClick={() => {
          parent?.postMessage?.({ pluginMessage: 'close' }, '*')
        }}
      >
        Close
      </button>
    </div>
  )
}

export default App

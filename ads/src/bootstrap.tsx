import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = () => {
  const el = document.getElementById('root')
  ReactDOM.render(<App />, el)
}

mount()

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el: HTMLElement) => {
  ReactDOM.render(<App />, el)
}

const el = document.getElementById('dev-root-ads')

if (el) {
  mount(el)
}

export { mount, App }

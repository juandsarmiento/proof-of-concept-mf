import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const mount = (el: HTMLElement, isIsolated?: boolean) => {
  if (isIsolated) {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      el
    )
    return
  }
  ReactDOM.render(<App />, el)
}

const el = document.getElementById('dev-root-references')

if (el) {
  mount(el, true)
}

export { mount, App }

import React, { useEffect, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { mount } from 'ads/App'
import Layout from './modules/Layout'
import './assets/tailwind.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App

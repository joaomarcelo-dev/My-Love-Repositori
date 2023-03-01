import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Coracao from './view/Coracao/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/coracao' element={<Coracao />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

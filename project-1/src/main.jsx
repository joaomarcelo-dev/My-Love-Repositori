import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Coracao from './view/Coracao/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route index path='/' element={<App />} />
          <Route path='/coracao' element={<Coracao />} />
        </Routes>
    </Router>
  </React.StrictMode>
)

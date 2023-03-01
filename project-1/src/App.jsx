
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/Home/index';
import Coracao from './view/Coracao/index';

function App() {



  return (
    <div className='content-app'>
      <Router>
        <Routes>
          <Route index path='/' element={<Coracao />} />
          <Route path='/coracao' element={<Coracao />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

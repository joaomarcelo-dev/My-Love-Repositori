
import { Routes, Route } from 'react-router-dom';
import Home from './view/Home/index';
import Coracao from './view/Coracao/index';

function App() {



  return (
    <div className='content-app'>

        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/coracao' element={<Coracao />} />
        </Routes>

    </div>
  )
}

export default App

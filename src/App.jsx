import {useState} from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'

import PrincipalContent from './pages/PrincipalContent'
import Directorio from './pages/Directorio'
import Acervo from './pages/Acervo'

function App() {

  const [rel, setRel] = useState(true)

  return (
    <>
      <HashRouter basename='/'>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<PrincipalContent />}/>
            <Route path='directorio' element={<Directorio />} />
            <Route path='acervo' element={<Acervo />}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

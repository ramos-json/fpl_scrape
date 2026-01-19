
import { Route,Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Teams from './components/Teams'
import Data from './components/Data'

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='teams' element={<Teams/>} />
          <Route path='data' element={<Data/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

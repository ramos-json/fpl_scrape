
import { Route,Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Teams from './components/Teams'
import Data from './components/Data'
import Search from './components/Search'
import Position from './components/Position'

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='teams' element={<Teams/>} />
          <Route path='data' element={<Data/>} />
          <Route path='search' element={<Search/>} />
          <Route path='position' element={<Position/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

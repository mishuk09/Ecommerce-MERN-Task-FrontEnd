import { Route, Routes } from 'react-router'
import Navbar from './pages/Navbar'
import './style/App.css'
import Home from './components/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App

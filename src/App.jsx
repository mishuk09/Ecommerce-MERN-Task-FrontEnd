import { Route, Routes } from 'react-router'
import Navbar from './pages/Navbar'
import './style/App.css'
import Child from './pages/Child'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Child />} />
      </Routes>

    </>
  )
}

export default App

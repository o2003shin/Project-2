import { Route, Routes } from 'react-router'
import './App.css'
import ReactorCard from './pages/reactors/ReactorCard'
import Reactors from './pages/reactors/Reactors.page'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Home</h1>
          </>
        }/>
        <Route path="/reactors" element={
          <>
            <h1>Reactors</h1>
            <Reactors />
          </>
        }/>
        <Route path="/reactors/:id" element={
          <>
            <h1>Reactor</h1>
          </>
        }/>
      </Routes>
    </>
  )
}

export default App

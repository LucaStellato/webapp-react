import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from '../pages/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path='/' element={<HomePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import DefaultLayout from '../pages/DefaultLayout'
import HomePage from '../pages/HomePage'
import MoviePages from '../pages/MoviePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/movies/:id' element={<MoviePages />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

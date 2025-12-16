import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import DefaultLayout from '../pages/DefaultLayout'
import HomePage from '../pages/HomePage'
import MoviePages from '../pages/MoviePage'
import { LoadingProvider } from "./LoadingContex"

function App() {


  return (
    <>
      <LoadingProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/movies/:id' element={<MoviePages />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoadingProvider>

    </>
  )
}

export default App

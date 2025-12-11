import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import DefaultLayout from './layout/DefaultLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

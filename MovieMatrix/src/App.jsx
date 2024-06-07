import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { HomeView } from './components/HomeView'




function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<HomeView/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

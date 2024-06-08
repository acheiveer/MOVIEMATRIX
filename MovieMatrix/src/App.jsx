import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { HomeView } from './components/HomeView';
import { DetailView } from './components/Detail';




function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<HomeView/>}></Route>
      <Route path={`/:type/:id`} element={<DetailView/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

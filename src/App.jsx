import { useState } from 'react';
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Contact from "./pages/Contact"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Form from './pages/Form';
import Places from './pages/Places';
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/proj1' element={<Places/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

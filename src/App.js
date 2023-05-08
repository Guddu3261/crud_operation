import React,{useEffect} from 'react'
import Create from './Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './Read';
import Update from './Update';
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create/>}/>
          <Route path='read' element={<Read/>}/>
          <Route path='update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
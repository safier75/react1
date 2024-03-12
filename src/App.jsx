import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Blogs from './components/blogs';
import Create from './components/Create';



function App() {
  

  return (
    <>
    <div className='bg-dark text-center py-2 shadow-lg '>
      <h1 className='text-white'>safiertech pvt ltd</h1>  
      </div>
    <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
      
      
    </>
  )
}

export default App

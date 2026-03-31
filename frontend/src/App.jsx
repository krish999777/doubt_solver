import {useState,useEffect} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Questions from './components/questions'
import Question from './components/EachQuestion'
import AddQuestion from './components/AddQuestion'

export default function(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Questions/>}/>
        <Route path='/question/:id' element={<Question/>}/>
        <Route path="/addquestion" element={<AddQuestion/>}/>
      </Routes>
    </BrowserRouter>
  )
}
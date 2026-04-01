import {useState,useEffect} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Questions from './components/questions'
import Question from './components/EachQuestion'
import AddQuestion from './components/AddQuestion'
import AddAnswers from './components/AddAnswer'

export default function(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Questions/>}/>
        <Route path='/question/:id' element={<Question/>}/>
        <Route path="/addquestion" element={<AddQuestion/>}/>
        <Route path="/question/:id/addanswer" element ={<AddAnswers/>}/>
      </Routes>
    </BrowserRouter>
  )
}
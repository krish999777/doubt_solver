import {useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import './Questions.css'

export default function(){
    const [questions,setQuestions]=useState([])
    const [loading,setLoading]=useState(true)
  useEffect(()=>{
    if(loading){
      return
    }
    async function getData(){
      setLoading(true)
      try{
      const res=await fetch('https://doubt-solver-vpos.onrender.com/questions')
      const data=await res.json()
      setQuestions(data)
    }catch(err){
      console.error(err)
      return
    }finally{
      setLoading(false)
    }
    }
    getData()
  },[])
  const questionList=questions.map(question=>{
    return (
      <Link to={`question/${question.id}`} key={question.id}>
      <div className="question-each-question">
        <div className="title">{question.title}</div>
        <div className="count">{question.answer_count} answers</div>
        <div className="created">{new Date(question.created_at).toLocaleString()}</div>
      </div>
      </Link>
    )
  })
  return(
    <>
      <div className="page">
        <div className="header">
          <h1>Doubt Solver</h1>
          <p>Ask questions, get answers</p>
        </div>

        <div className="top-bar">
          <Link to="/addquestion">
            <button className="ask-btn">+ Ask Question</button>
          </Link>
        </div>

        {loading?
        <h1>Loading...</h1>
        :
        <div className="question-all-questions">
          {questionList}
        </div>}
      </div>
    </>
  )
}
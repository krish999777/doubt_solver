import './EachQuestion.css'
import {useParams,Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function(){
    const [error,setError]=useState()
    const [data,setData]=useState()
    const [changeData,setChangeData]=useState(1)

    const {id}=useParams()

    function markAccepted(ansId){
        fetch(`http://localhost:8000/answers/${ansId}/accept`,{
            method:'POST'
        })
        .then(res=>{
            if (!res.ok) {
                throw new Error("Failed to accept answer")
            }
        })
        .catch(err=>{
            setError(err.message)
        })
        .finally(()=>setChangeData(changeData+1))

    }

    useEffect(()=>{
        async function fetchData(){

            try{
                const res=await fetch(`http://localhost:8000/questions/${id}`)
                if(!res.ok){
                    throw new Error('Error fetching data')
                }
                const apiData=await res.json()
                setData(apiData)
            }catch(err){
                setError(err.message)
            }
        }
        fetchData()
    },[changeData,id])
    if(error){
        return(
            <div className="each-question-error">
                {error}
            </div>
        )
    }
    if(!data){
        return(<div>Loading...</div>)
    }
    return(
        <div className="each-question-page">
            <div className="each-question-top-bar">
                <Link to={`/question/${id}/addanswer`} className="each-question-add-btn">
                    + Create Answer
                </Link>
            </div>
            <div className="each-question-question">
                <div className="each-question-title">{data.title}</div>
                <div className="each-question-body">{data.body}</div>
                <div className="each-question-author-name">{data.author_name}</div>
                <div className="each-question-created-at">{new Date(data.created_at).toLocaleString()}</div>
                <div className="each-question-all-answers">
                    {data.answers.length === 0 ? (
                        <p>No answers yet</p>
                        ) : 
                        data.answers.map(ans=>{
                        return(
                            <div key={ans.answer_id} className={`each-question-each-answer ${data.accepted_answer_id===ans.answer_id?'each-question-accepted':''}`}>
                                <div className="each-question-each-answer-content">{ans.content}</div>
                                <div className="each-question-each-answer-author-name">{ans.answer_author_name}</div>
                                <div className="each-question-each-answer-created-at">{new Date(ans.answer_created_at).toLocaleString()}</div>
                                {
                                    data.accepted_answer_id===ans.answer_id?
                                    ''
                                    :
                                    <button className="accept-answer-btn"onClick={()=>markAccepted(ans.answer_id)}>Mark as accepted</button>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
import {useState}from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import './AddAnswer.css'


export default function(){
    const [error,setError]=useState()

    const {id}=useParams()
    const navigate=useNavigate()
    function handleSubmit(event){
        setError(null)
        event.preventDefault()
        const form=event.target
        const formData=new FormData(form)
        const content=formData.get("content")
        const author_name=formData.get("author-name")
        fetch(`https://doubt-solver-vpos.onrender.com/questions/${id}/answers`,{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                content,
                author_name
            })
        })
        .then(res=>{
            if (!res.ok) {
                throw new Error("Request failed")
            }
            return res.json()
        })
        .then(data=>{
            navigate(`/question/${id}`)
        })
        .catch(err=>{
            setError(err.message)
        })
    }
    return(
        <>
            <div className="add-answer-page">
                <div className="add-answer-form-container">
                    <h2>Add answer</h2>

                    <form onSubmit={handleSubmit} className="add-answer-form">

                    <textarea name="content" className="add-answer-content" placeholder="Write your answer..." required />

                    <input type="text" name="author-name" placeholder="Your name" required autoComplete="off"/>

                    <button type="submit">Submit</button>
                    </form>

                    {error && <div className="error">{error}</div>}
                </div>
                </div>
        </>
    )
}
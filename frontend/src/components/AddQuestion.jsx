import {useState}from 'react'
import {useNavigate} from 'react-router-dom'
import './AddQuestion.css'


export default function(){
    const [error,setError]=useState()
    const navigate=useNavigate()
    function handleSubmit(event){
        setError(null)
        event.preventDefault()
        const form=event.target
        const formData=new FormData(form)
        const title=formData.get("title")
        const body=formData.get("body")
        const author_name=formData.get("author-name")
        fetch("http://localhost:8000/questions",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                title,
                body,
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
            navigate('/')
        })
        .catch(err=>{
            setError(err.message)
        })
    }
    return(
        <>
            <div className="add-page">
                <div className="form-container">
                    <h2>Ask a Question</h2>

                    <form onSubmit={handleSubmit} className="form">
                    <input type="text" name="title" placeholder="Enter question title" required autoComplete="off"/>

                    <textarea name="body" placeholder="Describe your question..." required />

                    <input type="text" name="author-name" placeholder="Your name" required autoComplete="off"/>

                    <button type="submit">Submit</button>
                    </form>

                    {error && <div className="error">{error}</div>}
                </div>
                </div>
        </>
    )
}
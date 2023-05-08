import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Update = () => {
    const navigate=useNavigate();
    const[id,setId]=useState(0);
    const[name,setName]=useState("")
    const[email,setEmail]=useState("");

    useEffect(()=>{
     setId(localStorage.getItem("id"))
     setName(localStorage.getItem("name"))
     setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate=(e)=>{
        debugger;
      e.preventDefault()
      axios.put(`https://63ec6a7fbe929df00caadea1.mockapi.io/crud_operation/${id}`,{
        name:name,
        email:email
      }).then(()=>{
        navigate("/read")
      })
    }
    // how to recursive call a function in reactjs
  return (
    <>
    <h2 className="text-center">Update Details</h2>
     <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input
       type="text" 
       className="form-control"
        onChange={(e)=>setName(e.target.value)}
        value={name}
       />
  </div>
  <div className="mb-3">
    <label className='form-label'>Email address</label>
    <input 
        type="email"
         className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
         />
  </div>
 <div className='d-flex justify-content-center'>
 <button
     type="submit"
      className="btn btn-primary mx-5"
       onClick={handleUpdate}
        >
        Save</button>
        <Link to="/read" >
        <button
        className="btn btn-secondary"
        >
        Back</button>
        </Link>
 </div>
</form>
    </>
  )
}

export default Update
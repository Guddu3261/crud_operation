import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const history=useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    // const header={"Access-Control-Allow-Origin":"*"}
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://63ec6a7fbe929df00caadea1.mockapi.io/crud_operation",{
        name:name,
        email:email
    }).then((res)=>{
        history("/read");
    })
    
}

  return (
   <>
   <h2>Create</h2>
    <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input
       type="text" 
       className="form-control"
        onChange={(e)=>setName(e.target.value)}
       />
  </div>
  <div className="mb-3">
    <label className='form-label'>Email address</label>
    <input 
        type="email"
         className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
         />
  </div>
  <button
     type="submit"
      className="btn btn-primary"
       onClick={handleSubmit}
        >
        Submit</button>
</form>
   </>
  )
}

export default Create;
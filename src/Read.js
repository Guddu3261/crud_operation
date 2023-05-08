import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const[data,setData]=useState([]);
    const[tableDark,setTableDark]=useState('');
    const getData=()=>{
        // debugger;
        axios.get("https://63ec6a7fbe929df00caadea1.mockapi.io/crud_operation")
        .then((res)=>{
            console.log(res);
            setData(res.data);
        }).catch((error)=>{
            console.log("Getting error get data")
        })
    }
  const handleDelete=(id)=>{
    debugger;
    axios.delete(`https://63ec6a7fbe929df00caadea1.mockapi.io/crud_operation/${id}`)
    .then(()=>{
        getData();
    })
  }
  const getUpdatedData=(id,name,email)=>{
   localStorage.setItem("id",id);
   localStorage.setItem("name",name);
   localStorage.setItem("email",email);
  }
    useEffect(()=>{
     getData();
    },[])
  return (
    <>
    <div className="form-check form-switch">
    <input 
     className="form-check-input"
      type="checkbox" role="switch"
        onClick={()=>{  
            if(tableDark==='table-dark'){
                setTableDark("")
            }else{
                setTableDark("table-dark")
            }
        }}
      />
 </div>
    <div className="d-flex justify-content-between m-2" >
    <h2 className="text-center m-2 " >Details</h2>
    <Link to="/">
    <button className="btn btn-secondary">Create</button>
    </Link>
    </div>
        <table className={`table ${tableDark}`} >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {
        data.map((index,i)=>{
            return(
               <tr key={i} >
               <td> {index.id} </td>
               <td> {index.name} </td>
               <td> {index.email} </td>
               <td>
                <Link to="/update" >
                <button
                 className='btn btn-success'
                 onClick={()=>getUpdatedData(index.id,index.name,index.email)}
                  >Edit</button>
                </Link>
               </td>
               <td>
                <button 
                  className='btn btn-danger'
                  onClick={()=>handleDelete(index.id)}
                  >
                  Delete</button>
               </td>
               </tr>
            )
        })
      }
    
  </tbody>
</table>
    </>
  )
}

export default Read;
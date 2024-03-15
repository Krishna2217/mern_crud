import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const Users = () => {
  // const [users, setUsers] = useState([{
  //   name:"krishna",age : 23, phone : 8969135901
  // }])
  const [users,setUsers] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:5000/getData')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

   const handleDelete = (id) =>{
      axios.delete('http://localhost:5000/deleteData/'+id)
      .then(result =>{
        setUsers(result.data)
        window.location.reload()
      })
      .catch(err =>console.log(err))
   } 
  return (
    <>
      <div className="min-h-screen bg-blue-400 flex  justify-center items-center">
        <div className="min-w-1/2 rounded bg-white p-4">
          <table className="w-full border-separate border border-slate-400 ...">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2">Name</th>
                <th className="border border-slate-300 p-2">Email</th>
                <th className="border border-slate-300 p-2">Age</th>
                <th className="border border-slate-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                users.map((user) => {
                  return <tr>
                  <td className="border border-slate-300 p-2">{user.name}</td>
                  <td className="border border-slate-300 p-2">{user.email}</td>
                  <td className="border border-slate-300 p-2">{user.age}</td>
                  <td className="border border-slate-300 p-2">
                  <Link to={`/update/${user._id}`} className="bg-green-400 px-2 py-1 font-bold rounded mr-1 b-2 my-1 hover:bg-green-600 "  >Update</Link>
                    <button onClick={()=> handleDelete(user._id)} className="bg-red-400 px-2 py-1 font-bold rounded hover:bg-red-600">Delete</button>
                  </td> 
                </tr>
                })
              }
            </tbody>
          </table>
          <div className="mb-1 flex justify-center content-center">
            <Link to="/create" className="bg-green-400 px-2 py-1 font-bold rounded mr-1 b-2 my-1 hover:bg-green-600" >Add +</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

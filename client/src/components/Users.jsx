import React, { useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([{
    name:"krishna",age : 23, phone : 8969135901
  }])
  return (
    <>
      <div className="min-h-screen bg-blue-400 flex  justify-center items-center">
        <div className="min-w-1/2 rounded bg-white p-4">
          <table class="w-full border-separate border border-slate-400 ...">
            <thead>
              <tr>
                <th class="border border-slate-300 p-2">Name</th>
                <th class="border border-slate-300 p-2">Age</th>
                <th class="border border-slate-300 p-2">Phone</th>
                <th class="border border-slate-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                users.map((user) => {
                  return <tr>
                  <td class="border border-slate-300 p-2">{user.name}</td>
                  <td class="border border-slate-300 p-2">{user.age}</td>
                  <td class="border border-slate-300 p-2">{user.phone}</td>
                  <td class="border border-slate-300 p-2">
                  <Link to="/update" className="bg-green-400 px-2 py-1 font-bold rounded mr-1 b-2 my-1 hover:opacity-85" >Update</Link>
                    <button className="bg-red-400 px-2 py-1 font-bold rounded hover:opacity-85">Delete</button>
                  </td>
                </tr>
                })
              }
            </tbody>
          </table>
          <div className="mb-1 flex justify-center content-center">
            <Link to="/create" className="bg-green-400 px-2 py-1 font-bold rounded mr-1 b-2 my-1 hover:opacity-85" >Add +</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

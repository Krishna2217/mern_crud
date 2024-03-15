import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UpdateUsers = () => {
  const { id } = useParams('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/getUser/" + id)
      .then((result) => {
        setName(result.data.name),
          setAge(result.data.age),
          setEmail(result.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/updateUser/" + id,{name,email,age})
      .then((result) => {
        console.log(result);
        setName(result.data.value);
        setAge(result.data.value);
        setEmail(result.data.value);
        navigate("/");
      })
      .catch((err) => console.log(err));
      
  };
  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      <div className="w-1/2 rounded bg-white p-4">
        <h1 className="font-bold text-center">Update Users</h1>
        <form onSubmit={update}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-serif mb-1">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="rounded border-2 p-1 placeholder-italic border-slate-200 outline-none w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-serif mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="rounded border-2 p-1 placeholder-italic border-slate-200 outline-none w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block font-serif mb-1">
              Age
            </label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="text"
              id="age"
              name="age"
              placeholder="Enter Age"
              className="rounded border-2 p-1 placeholder-italic border-slate-200 outline-none w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;

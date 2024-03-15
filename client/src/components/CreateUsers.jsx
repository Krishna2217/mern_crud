import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUsers = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (name && email && age) {
      axios
        .post("http://localhost:5000/createUser", { name, age, email })
        .then((result) => {
          console.log(result);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      {
        alert("Enter detail correctly");
      }
    }
  };
  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      <div className="w-1/2 rounded bg-white p-4">
        <h1 className="font-bold text-center">Add Users</h1>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-serif mb-1">
              Name
            </label>
            <input
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;

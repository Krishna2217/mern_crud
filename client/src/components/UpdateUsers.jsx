import React from 'react'

const UpdateUsers = () => {
    return (
      <div className="min-h-screen bg-blue-400 flex justify-center items-center">
        <div className="w-1/2 rounded bg-white p-4">
          <h1 className="font-bold text-center">Update Users</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-serif mb-1">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter Name" className="rounded border-2 p-1 placeholder-italic border-slate-200 outline-none w-full"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-serif mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Email" className="rounded border-2 p-1 placeholder-italic border-slate-200 outline-none w-full"/>
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block font-serif mb-1">Age</label>
              <input type="text" id="age" name="age" placeholder="Enter Age" className="rounded border-2 p-1 placeholder-italic border-slate-200 outline-none w-full"/>
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Update</button>
          </form>
        </div>
      </div>
    );
}

export default UpdateUsers

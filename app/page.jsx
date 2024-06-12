"use client"
import React, { useState } from 'react'

function page() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(desc)
        settitle("")
        setdesc("")
    }
  return (
    <>
        <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo List</h1>
        <form onSubmit={submitHandler}>
            <input 
            type="text" 
            className='text-2xl border-zinc-600 border-4 m-8 px-4 py-2' 
            placeholder='Enter a task here'
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }}/>
            <input 
            type="text" 
            className='text-2xl border-zinc-600 border-4 m-8 px-4 py-2' 
            placeholder='Enter Description here'
            value={desc}
            onChange={(e)=>{
                setdesc(e.target.value)
            }}/>
            <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
        </form>
    </>
  )
}

export default page
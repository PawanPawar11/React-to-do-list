"use client"
import React, { useState } from 'react'

function page() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask, setmainTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setmainTask([...mainTask, {title, desc}])
        settitle("")
        setdesc("")
        console.log(mainTask)
    }
    
    const deleteHandler = (i) =>{
        let copyTask = [...mainTask]
        copyTask.splice(i,1)
        setmainTask(copyTask)
    }

    let renderTask = <h2 className='text-[1.1rem]'>No Task Available</h2>

    if(mainTask.length>0) {
        renderTask = mainTask.map((t, i) => {
        return ( 
        <li key={i} className='flex items-center justify-between mb-5'>
            <div className='flex justify-between items-center gap-10 w-2/3'>
                <h5 className='text-2xl font-semibold'>{t.title}</h5>
                <h6 className='text-2xl font-medium'>{t.desc}</h6>
            </div>
            <button onClick={()=>{deleteHandler(i)}} className='bg-red-500 px-4 py-2 text-[1.3rem] font-semibold rounded-md text-white'>Delete</button>
        </li>
        );
    });
    }

    return (
    <>
        <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My To-do List</h1>
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
        <hr />
        <div className='p-8 bg-slate-400'>
            <ul>
                {renderTask}
            </ul>
        </div>
    </>
  )
}

export default page
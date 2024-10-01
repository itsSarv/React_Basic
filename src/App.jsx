
import React, { useState } from 'react'

const App = () => {

  const [color, setcolor] = useState('black')

  return (
    <>
    <div className='min-h-screen w-full flex flex-col gap-8 justify-center items-center text-white' style={{backgroundColor: color}}>
      <button onClick={()=>{setcolor("white")}} className='bg-green-300 px-6 py-3 hover:text-gray-500 rounded-full'>Click me to reset</button>
      <h1 style={color=='white' ? {color: 'black'} : {color: 'white'}}>Select Background Color</h1>
      <div className='buttons'>
     { ["red", "green", "orange", "blue", "purple", "black", "pink", "crimson"].map((item, index) =>{
       return <button onClick={()=>{setcolor(item)}} key={index} className= "text-white px-3 py-2 rounded-lg mx-3" style={{backgroundColor: item}}> {item} </button>
      })}
      </div>
    </div>    
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-800'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          className='w-full px-4 py-2 focus:outline-none'
          placeholder='Password'
          value={password}
          readOnly
        />
        <button
          className='outline-none bg-blue-500 text-white px-4 py-1 shrink-0'
          >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            id=''
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => setnumberAllowed((prev) => !prev)}          
          />
          <label htmlFor="number">Numbers</label>
        </div>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => setcharAllowed((prev) => !prev)}
          name=''
          id=''
        />
        <label htmlFor="char">Characters</label>
      </div>
    </div>
  )
}

export default App
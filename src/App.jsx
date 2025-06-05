
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [range, setRange] = useState("8")
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [copy, setCopy] = useState("Copy")



const generated = useCallback(()=>{
  setCopy("Copy ")
  let str=""
  let pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number) {pass+="1234567890"} 
  if(symbol){pass+="!@#$%^&*()-_=+[]{};:'\"<>,.?/\\|~`"}
  
  for (let a = 0; a < range; a++) {
   let display = pass[Math.floor(Math.random()*pass.length)]
    str+=display
  }
  setPassword(str)
  
},[range,number,symbol,setPassword])

const copyClip = ()=>{
  if(password){
    window.navigator.clipboard.writeText(password)
  setCopy("Copied!");
  setTimeout(()=>{
    setCopy("Copy")
  },5000)
  }
}


  return (
    <div className=" bg-gradient-to-tr from-amber-500 via-pink-500 to-red-500 h-screen w-full min-h-screen bg-amber-600 flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Password Generator</h2>

      <div className="text-white bg-gray-400/20 p-6 rounded-xl shadow-lg w-full max-w-md">

        <div className="mb-4 flex border-1 border-amber-300 justify-center align-middle rounded-2xl">
          <input
            type="text"
            className="w-15/16 text-white outline-none border-none rounded-lg px-4 py-2 text-lg cursor-no-drop "
            placeholder="Generated password"
            value={password}
            readOnly
          />
          <span onClick={copyClip} className='w-25 text-center font-black  cursor-pointer p-2 rounded-r-2xl bg-green-400'>{copy}</span>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium sm:text-lg">Password Length</label>
            <input type="range" min="6" value={range} max="20" onChange={(e)=>{setRange(e.target.value)}} className="w-3/10 sm:w-5/10 text-white scale-125 accent-amber-600" />
            <span className='w-1'>{range}</span>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id='number' className="scale-125 accent-amber-600" defaultChecked={number} onChange={()=>{setNumber((prev)=> !prev)}} />
            <label htmlFor='number' className="text-lg">Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id='symbol' className="scale-125 accent-amber-600" defaultChecked={symbol} onChange={()=> setSymbol((prev)=> !prev)} />
            <label htmlFor='symbol' className="text-lg">Include Special Characters</label>
          </div>
          <button onClick={generated} className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold py-2 rounded-lg transition">
        Generate Password
      </button>
        </div>
      </div>
    </div>

)
}

export default App




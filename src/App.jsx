import { useState } from "react"
import MyApiCall from "./Components/MyApiCall"

function App() {
let [value,setValue]=useState("");
let [url, setUrl]=useState("https://api.github.com/users/ibtisam02")
let handleurl=()=>{
  setUrl(`https://api.github.com/users/${value}`)
}
  return (
    <>
    <div className="flex mt-5 justify-center items-center">
      <input  onChange={(e)=>setValue(()=>e.target.value)} className="bg-purple px-2 py-1 border-b-2 border-black outline-none " value={value} placeholder="Enter Username" type="text" />
      <button onClick={handleurl} className="ml-3 bg-green-700 text-white px-5 py-1">Search</button>
    </div>

   <MyApiCall api={url}/>
    </>
  )
}

export default App

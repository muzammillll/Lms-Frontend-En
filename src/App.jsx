import React, { useEffect, useState } from 'react';  // ✅ Import useState
import './App.css'
 // ✅ Import toast

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
